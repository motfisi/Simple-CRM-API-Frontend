import React from 'react';
import { Input, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import FormItem from 'antd/es/form/FormItem';

const rules = [
  {
    required: true,
    message: 'Пожалуйста, введите имя',
  },
  {
    max: 35,
    min: 3,
    message: 'От 3 до 35 символов',
  },
];

function ClientNameInput({ name }) {
  return (
    <>
      <Typography.Text>Имя</Typography.Text>
      <FormItem name={name} hasFeedback validateFirst rules={rules}>
        <Input
          allowClear
          prefix={<UserOutlined />}
          placeholder='Введите имя'
          maxLength={35}
        />
      </FormItem>
    </>
  );
}

export default ClientNameInput;
