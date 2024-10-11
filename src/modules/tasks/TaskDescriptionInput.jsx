import React from 'react';
import { Typography } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import FormItem from 'antd/es/form/FormItem';

const rules = [
  {
    required: true,
    message: 'Пожалуйста, введите описание задачи',
  },
  {
    max: 500,
    min: 3,
    message: 'От 3 до 500 символов',
  },
];

function TaskDescriptionInput({ name }) {
  return (
    <>
      <Typography.Text>Описание задачи</Typography.Text>
      <FormItem name={name} hasFeedback validateFirst rules={rules}>
        <TextArea
          rows={4}
          allowClear
          placeholder='Введите описание задачи'
          maxLength={500}
        />
      </FormItem>
    </>
  );
}

export default TaskDescriptionInput;
