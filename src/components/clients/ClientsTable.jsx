import React, { useState } from 'react';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Button, Flex, Table, Tooltip } from 'antd';
import { TABLE_LOCALE, ROUTES, MODAL_TYPE } from '@constants';
import { useNavigate } from 'react-router-dom';
import ClientModal from '@src/components/clients/ClientModal';

const client_column = {
  title: 'Клиент',
  key: 'name',
  dataIndex: 'name',
  sorter: (a, b) => {
    const firstFullName = a.name;
    const secondFullName = b.name;

    return firstFullName.localeCompare(secondFullName);
  },
};

const email_column = {
  title: 'Email',
  key: 'email',
  dataIndex: 'email',
};

const phone_column = {
  title: 'Номер телефона',
  key: 'phone',
  dataIndex: 'phone',
};

const created_column = {
  title: 'Создан',
  key: 'created_at',
  dataIndex: 'created_at',
  sorter: (a, b) => new Date(a.created_at) - new Date(b.created_at),
};

const updated_column = {
  title: 'Обновлён',
  key: 'updated_at',
  dataIndex: 'updated_at',
  sorter: (a, b) => new Date(a.updated_at) - new Date(b.updated_at),
};

function ClientsTable({ clientsData, onClientsChange }) {
  const navigate = useNavigate();
  const [isClientModalOpen, setIsClientModalOpen] = useState(false);
  const [selectedClientData, setSelectedClientData] = useState();

  const openClientModal = (data) => {
    setSelectedClientData(data);
    setIsClientModalOpen(true);
  };

  const deleteClient = (id) => {
    onClientsChange();
  };

  const columns = [
    client_column,
    email_column,
    phone_column,
    created_column,
    updated_column,
    {
      title: 'Действия',
      key: 'action',
      render: (_, record) => (
        <Flex>
          <Tooltip title='Редактировать'>
            <Button
              type='text'
              icon={<EditOutlined />}
              onClick={(e) => {
                e.stopPropagation();
                openClientModal(record);
              }}
            />
          </Tooltip>
          <Tooltip title='Удалить'>
            <Button
              type='text'
              icon={<DeleteOutlined />}
              onClick={(e) => {
                e.stopPropagation();
                deleteClient(record.id);
              }}
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
          pageSize: 5,
        }}
        locale={TABLE_LOCALE}
        onRow={(record) => ({
          onClick: () => {
            navigate(`${ROUTES.CLIENT_INFO.PATH(record.id)}`);
          },
        })}
      />
      <ClientModal
        type={MODAL_TYPE.EDIT}
        clientData={selectedClientData}
        isOpen={isClientModalOpen}
        onOk={() => setIsClientModalOpen(false)}
        onCancel={() => setIsClientModalOpen(false)}
        onClientsChange={onClientsChange}
      />
    </>
  );
}

export default ClientsTable;
