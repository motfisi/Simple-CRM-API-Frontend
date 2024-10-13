import React, { useState } from 'react';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Button, Flex, Table, Tooltip, Popconfirm, message } from 'antd';
import { TABLE_LOCALE, ROUTES, MODAL_TYPE } from '@constants';
import { useNavigate } from 'react-router-dom';
import ClientModal from '@src/components/clients/ClientModal';
import { clientsApi } from '@api';
import { changeDateFormat } from '@utils';

const client_column = {
  title: 'Клиент',
  key: 'name',
  dataIndex: 'name',
  sorter: (a, b) => {
    const firstName = a.name;
    const secondName = b.name;

    return firstName.localeCompare(secondName);
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
  key: 'createdAt',
  dataIndex: 'createdAt',
  render: (date) => changeDateFormat(date),
  sorter: (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
};

const updated_column = {
  title: 'Обновлён',
  key: 'updatedAt',
  dataIndex: 'updatedAt',
  render: (date) => changeDateFormat(date),
  sorter: (a, b) => new Date(a.updatedAt) - new Date(b.updatedAt),
};

function ClientsTable({ clientsData, onClientsChange }) {
  const navigate = useNavigate();
  const [isClientModalOpen, setIsClientModalOpen] = useState(false);
  const [selectedClientData, setSelectedClientData] = useState();

  const openClientModal = (data) => {
    setSelectedClientData(data);
    setIsClientModalOpen(true);
  };

  const onDeleteConfirm = (e, id) => {
    deleteClient(id);
    e.stopPropagation();
  };

  const deleteClient = async (id) => {
    console.log(id);
    try {
      await clientsApi.deleteClient(id);
      message.success('Клиент успешно удалён');
      onClientsChange();
    } catch {
      message.error('Не удалось удалить клиента');
    }
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
            <Popconfirm
              title='Удаление клиента'
              description='Вы уверены, что хотите удалить этого клиента?'
              onConfirm={(e) => onDeleteConfirm(e, record.id)}
              onCancel={(e) => e.stopPropagation()}
              placement='leftTop'
              okText='Да'
              cancelText='Отмена'
            >
              <Button
                type='text'
                icon={<DeleteOutlined />}
                onClick={(e) => {
                  e.stopPropagation();
                }}
              />
            </Popconfirm>
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
