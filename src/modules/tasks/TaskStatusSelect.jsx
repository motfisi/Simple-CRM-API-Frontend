import React, { useState, useEffect } from 'react';
import { Select, Typography } from 'antd';
import { STATUSES } from '@constants';
import FormItem from 'antd/es/form/FormItem';

const rules = [
  {
    required: true,
    message: 'Пожалуйста, выберите статус задачи',
  },
];

function TaskClientSelect({ name }) {
  return (
    <>
      <Typography.Text>Статус</Typography.Text>
      <FormItem name={name} hasFeedback validateFirst rules={rules}>
        <Select placeholder='Выберите статус' options={STATUSES} />
      </FormItem>
    </>
  );
}

export default TaskClientSelect;
