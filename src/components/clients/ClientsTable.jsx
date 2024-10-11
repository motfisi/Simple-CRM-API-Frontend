import React from 'react';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Button, Flex, Table, Tooltip, Form, Typography } from 'antd';
import { TABLE_LOCALE, ROUTES } from '@constants';
import { useNavigate } from 'react-router-dom';

const columns = [
  {
    title: 'Имя',
    key: 'name',
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
    title: 'Номер телефона',
    key: 'phone',
    dataIndex: 'phone',
  },
  {
    title: 'Создан',
    key: 'created_at',
    dataIndex: 'created_at',
    sorter: (a, b) => new Date(a.created_at) - new Date(b.created_at),
  },
  {
    title: 'Обновлён',
    key: 'updated_at',
    dataIndex: 'updated_at',
    sorter: (a, b) => new Date(a.updated_at) - new Date(b.updated_at),
  },
  {
    title: 'Действия',
    key: 'action',
    render: (_, record) => (
      <Flex>
        <Tooltip title='Редактировать'>
          <Button
            type='text'
            icon={<EditOutlined />}
            onClick={() => openEditModal(record.id)}
          />
        </Tooltip>
        <Tooltip title='Удалить'>
          <Button
            type='text'
            icon={<DeleteOutlined />}
            onClick={() => openEditModal(record.id)}
          />
        </Tooltip>
      </Flex>
    ),
  },
];

function ClientsTable({ clientsData }) {
  const navigate = useNavigate();

  return (
    <>
      <Table
        dataSource={clientsData}
        columns={columns}
        pagination={{
          position: ['bottomCenter'],
          pageSize: 5,
        }}
        locale={TABLE_LOCALE}
        onRow={(record) => ({
          onClick: () => {
            navigate(`${ROUTES.CLIENT_INFO.PATH(record.id)}`);
          },
        })}
      />
    </>
  );
}

export default ClientsTable;
