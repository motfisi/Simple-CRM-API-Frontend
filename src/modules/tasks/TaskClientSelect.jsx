import React, { useState, useEffect } from 'react';
import { Select, Typography } from 'antd';
import FormItem from 'antd/es/form/FormItem';

const rules = [
  {
    required: true,
    message: 'Пожалуйста, выберите клиента',
  },
];

function TaskClientSelect({ name, options }) {
  return (
    <>
      <Typography.Text>Клиент</Typography.Text>
      <FormItem name={name} hasFeedback validateFirst rules={rules}>
        <Select placeholder='Выберите клиента' options={options} />
      </FormItem>
    </>
  );
}

export default TaskClientSelect;
