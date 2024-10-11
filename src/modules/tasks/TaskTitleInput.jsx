import React from 'react';
import { Input, Typography } from 'antd';
import { SnippetsOutlined } from '@ant-design/icons';
import FormItem from 'antd/es/form/FormItem';

const rules = [
  {
    required: true,
    message: 'Пожалуйста, введите название задачи',
  },
  {
    max: 35,
    min: 3,
    message: 'От 3 до 35 символов',
  },
];

function TaskTitleInput({ name }) {
  return (
    <>
      <Typography.Text>Задача</Typography.Text>
      <FormItem name={name} hasFeedback validateFirst rules={rules}>
        <Input
          allowClear
          prefix={<SnippetsOutlined />}
          placeholder='Введите название задачи'
          maxLength={35}
        />
      </FormItem>
    </>
  );
}

export default TaskTitleInput;
