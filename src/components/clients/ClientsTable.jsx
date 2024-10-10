import React from 'react';
import { EditOutlined } from '@ant-design/icons';
import { Button, Flex, Table, Tooltip, Form, Typography } from 'antd';
import { useState } from 'react';

function ClientsTable({ clientsData }) {
  const columns = [
    {
      title: 'Фамилия имя отчество',
      key: 'fullname',
      dataIndex: 'name',
      sorter: (a, b) => {
        const firstFullName = `${a.second_name} ${a.first_name} ${a.third_name}`;
        const secondFullName = `${b.second_name} ${b.first_name} ${b.third_name}`;

        return firstFullName.localeCompare(secondFullName);
      },
    },
    {
      title: 'Email',
      key: 'email',
      dataIndex: 'email',
    },
    {
      title: 'Действия',
      key: 'action',
      render: (_, record) => (
        <Flex>
          <Tooltip title='Редактирование'>
            <Button
              type='text'
              icon={<EditOutlined />}
              onClick={() => openEditModal(record.id)}
            />
          </Tooltip>
        </Flex>
      ),
    },
  ];

  return (
    <>
      <Table
        dataSource={clientsData}
        columns={columns}
        pagination={{
          position: ['bottomCenter'],
        }}
      />
    </>
  );
}

export default ClientsTable;
