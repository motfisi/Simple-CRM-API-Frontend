import React from 'react';
import InputMask from 'react-input-mask';
import { Typography } from 'antd';
import { PhoneOutlined } from '@ant-design/icons';
import FormItem from 'antd/es/form/FormItem';
import { Input } from 'antd';

const rules = [
  {
    required: true,
    message: 'Пожалуйста, введите номер телефона',
  },
];

function ClientPhoneInput({ name }) {
  return (
    <>
      <Typography.Text>Номер телефона</Typography.Text>
      <FormItem name={name} hasFeedback validateFirst rules={rules}>
        <InputMask mask='+375 (99) 999-99-99' maskChar={null}>
          {(inputProps) => (
            <Input
              {...inputProps}
              allowClear
              prefix={<PhoneOutlined />}
              placeholder='Введите номер телефона'
            />
          )}
        </InputMask>
      </FormItem>
    </>
  );
}

export default ClientPhoneInput;
