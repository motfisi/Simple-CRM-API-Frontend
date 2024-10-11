import React, { useState } from 'react';
import { MODAL_TYPE } from '@constants';
import ClientNameInput from '@modules/clients/ClientNameInput';
import ClientEmailInput from '@modules/clients/ClientEmailInput';
import ClientPhoneInput from '@modules/clients/ClientPhoneInput';
import { Button, Form, message, Modal, Space } from 'antd';
import FormItem from 'antd/es/form/FormItem';

function ClientModal({ isOpen, onOk, onCancel, type }) {
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);
  const onFinish = async () => {};

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
