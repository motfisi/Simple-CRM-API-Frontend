import React from 'react';
import { Input, Typography } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import FormItem from 'antd/es/form/FormItem';

const rules = [
  {
    required: true,
    whitespace: true,
    message: 'Пожалуйста, введите email',
  },
  {
    type: 'email',
    message: 'Введите корректный email',
  },
];

function ClientEmailInput({ name }) {
  return (
    <>
      <Typography.Text>Email</Typography.Text>
      <FormItem name={name} hasFeedback validateFirst rules={rules}>
        <Input
          type='email'
          allowClear
          prefix={<MailOutlined />}
          placeholder='Введите email'
        />
      </FormItem>
    </>
  );
}

export default ClientEmailInput;
