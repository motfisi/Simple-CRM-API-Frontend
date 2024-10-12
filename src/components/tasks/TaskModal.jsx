import React, { useState, useEffect } from 'react';
import { MODAL_TYPE } from '@constants';
import TaskTitleInput from '@modules/tasks/TaskTitleInput';
import TaskDescriptionInput from '@modules/tasks/TaskDescriptionInput';
import TaskClientSelect from '@modules/tasks/TaskClientSelect';
import TaskStatusSelect from '@modules/tasks/TaskStatusSelect';
import { Button, Form, message, Modal, Space } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import { tasksApi, clientsApi } from '@api';

function TaskModal({ isOpen, onOk, onCancel, type, onTasksChange, taskData }) {
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedClientID, setSelectedClientID] = useState();
  const [options, setOptions] = useState();

  useEffect(() => {
    if (isOpen) {
      getClients();
      if (type === MODAL_TYPE.EDIT) {
        form.setFieldsValue({
          task_title: taskData?.title,
          task_description: taskData?.description,
          task_client: taskData?.user_id,
          task_status: taskData?.status,
        });
        setSelectedClientID(taskData?.user_id);
      }
    }
  }, [isOpen, taskData]);

  const getClients = async () => {
    try {
      await clientsApi.getClients().then((data) => {});
    } catch {
      message.error('Невозможно получить клиентов');
    }
  };

  const onFinish = async () => {
    setIsLoading(true);
    const body = {
      title: form.getFieldValue('task_title'),
      description: form.getFieldValue('task_description'),
      client_id: form.getFieldValue('task_client'),
      status: form.getFieldValue('task_status'),
    };

    try {
      if (type === MODAL_TYPE.ADD) {
        await tasksApi.addTask(body);
        message.success('Задача успешно добавлена');
      } else if (type === MODAL_TYPE.EDIT) {
        body.task_id = taskData.id;
        await tasksApi.changeTask(body);
        message.success('Задача успешно изменена');
      }

      onTasksChange();
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
        type === MODAL_TYPE.ADD ? 'Добавить задачу' : 'Редактировать задачу'
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
        <TaskTitleInput name='task_title' />
        <TaskDescriptionInput name='task_description' />
        <TaskClientSelect name='task_client' options={options} />
        <TaskStatusSelect name='task_status' />
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

export default TaskModal;
