import React, { useState, useEffect } from 'react';
import { MODAL_TYPE } from '@constants';
import ClientNameInput from '@modules/clients/ClientNameInput';
import ClientEmailInput from '@modules/clients/ClientEmailInput';
import ClientPhoneInput from '@modules/clients/ClientPhoneInput';
import { Button, Form, message, Modal, Space } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import { clientsApi } from '@api';

function ClientModal({
  isOpen,
  onOk,
  onCancel,
  type,
  onClientsChange,
  clientData,
}) {
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (type === MODAL_TYPE.EDIT && isOpen) {
      form.setFieldsValue({
        client_name: clientData?.name,
        client_email: clientData?.email,
        client_phone: clientData?.phone,
      });
    }
  }, [isOpen, clientData]);

  const onFinish = async () => {
    setIsLoading(true);
    const body = {
      name: form.getFieldValue('client_name'),
      email: form.getFieldValue('client_email'),
      phone: form.getFieldValue('client_phone'),
    };

    try {
      if (type === MODAL_TYPE.ADD) {
        await clientsApi.addClient(body);
        message.success('Клиент успешно добавлен');
      } else if (type === MODAL_TYPE.EDIT) {
        body.client_id = clientData.id;
        await clientsApi.changeClient(body);
        message.success('Клиент успешно изменён');
      }

      onClientsChange();
      onOk();
    } catch {
      message.error('Произошла ошибка');
    } finally {
      setIsLoading(false);
    }
  };

  const onFinishFailed = () => {
    message.error('Проверьте поля для ввода!');
  };

  return (
    <Modal
      title={
        type === MODAL_TYPE.ADD ? 'Добавить клиента' : 'Редактировать клиента'
      }
      open={isOpen}
      onOk={onOk}
      onCancel={onCancel}
      footer={null}
    >
      <Form
        form={form}
        layout='vertical'
        variant='filled'
        requiredMark='Default'
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <ClientNameInput name='client_name' />
        <ClientEmailInput name='client_email' />
        <ClientPhoneInput name='client_phone' />
        <Space>
          <FormItem>
            <Button type='primary' htmlType='submit' loading={isLoading}>
              Сохранить
            </Button>
          </FormItem>
          <FormItem>
            <Button onClick={onCancel}>Отмена</Button>
          </FormItem>
        </Space>
      </Form>
    </Modal>
  );
}

export default ClientModal;
