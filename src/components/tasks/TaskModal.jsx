import React, { useState, useEffect } from 'react';
import { MODAL_TYPE } from '@constants';
import TaskTitleInput from '@modules/tasks/TaskTitleInput';
import TaskDescriptionInput from '@modules/tasks/TaskDescriptionInput';
import TaskClientSelect from '@modules/tasks/TaskClientSelect';
import TaskStatusSelect from '@modules/tasks/TaskStatusSelect';
import { Button, Form, message, Modal, Space } from 'antd';
import FormItem from 'antd/es/form/FormItem';

function TaskModal({ isOpen, onOk, onCancel, type, onTasksChange, taskData }) {
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedClientID, setSelectedClientID] = useState();

  useEffect(() => {
    if (type === MODAL_TYPE.EDIT) {
      form.setFieldsValue({
        task_title: taskData?.title,
        task_description: taskData?.description,
        task_client: taskData?.user_id,
        task_status: taskData?.status,
      });
      setSelectedClientID(taskData?.user_id);
    }
  }, [isOpen, taskData]);

  const onFinish = async () => {
    const body = {
      title: form.getFieldValue('task_title'),
      description: form.getFieldValue('task_description'),
      client_id: form.getFieldValue('task_client'),
      status: form.getFieldValue('task_status'),
    };

    if (type === MODAL_TYPE.ADD) {
    } else if (type === MODAL_TYPE.EDIT) {
      body.task_id = taskData.id;
    }
    onTasksChange();
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
        <TaskClientSelect
          name='task_client'
          selectedClient={selectedClientID}
        />
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
