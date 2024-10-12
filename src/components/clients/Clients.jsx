import React, { useState, useEffect } from 'react';
import {
  Typography,
  Skeleton,
  Breadcrumb,
  Row,
  Col,
  Button,
  message,
} from 'antd';
import ClientsTable from '@src/components/clients/ClientsTable';
import ClientModal from '@src/components/clients/ClientModal';
import { ROUTES, MODAL_TYPE } from '@constants';
import { clientsApi } from '@api';

import './sass/index.scss';

const clientsDataExample = [
  {
    key: 1,
    id: 1,
    name: 'Матвей',
    email: 'matthew.ermakovich@gmail.com',
    phone: '+375 (29) 624-53-80',
    created_at: '03.06.2017',
    updated_at: '12.12.2019',
  },
  {
    key: 2,
    id: 2,
    name: 'Евгений',
    email: 'zheka@gmail.com',
    phone: '+375 (29) 534-43-23',
    created_at: '06.06.2006',
    updated_at: '12.12.2012',
  },
  {
    key: 3,
    id: 3,
    name: 'Илья',
    email: 'ilya@gmail.com',
    phone: '+375 (29) 534-43-23',
    created_at: '19.12.2021',
    updated_at: '01.01.2024',
  },
  {
    key: 4,
    id: 4,
    name: 'Ваня',
    email: 'ivan@gmail.com',
    phone: '+375 (29) 645-43-23',
    created_at: '12.12.2012',
    updated_at: '12.12.2012',
  },
  {
    key: 5,
    id: 5,
    name: 'Петя',
    email: 'petya@gmail.com',
    phone: '+375 (29) 645-24-42',
    created_at: '12.12.2012',
    updated_at: '12.12.2012',
  },
  {
    key: 6,
    id: 6,
    name: 'Серафим',
    email: 'serafim@gmail.com',
    phone: '+375 (29) 535-43-23',
    created_at: '12.12.2012',
    updated_at: '12.12.2012',
  },
  {
    key: 7,
    id: 7,
    name: 'Коля',
    email: 'kolya@gmail.com',
    phone: '+375 (29) 345-34-23',
    created_at: '12.12.2012',
    updated_at: '12.12.2012',
  },
  {
    key: 8,
    id: 8,
    name: 'Саша',
    email: 'sasha@gmail.com',
    phone: '+375 (29) 456-23-32',
    created_at: '13.12.2012',
    updated_at: '12.12.2012',
  },
  {
    key: 9,
    id: 9,
    name: 'Вовчик',
    email: 'vova@gmail.com',
    phone: '+375 (29) 423-23-43',
    created_at: '14.12.2012',
    updated_at: '12.12.2012',
  },
  {
    key: 10,
    id: 10,
    name: 'Катя',
    email: 'katya@gmail.com',
    phone: '+375 (29) 322-32-80',
    created_at: '12.12.2012',
    updated_at: '12.12.2012',
  },
  {
    key: 11,
    id: 11,
    name: 'Аня',
    email: 'anya@gmail.com',
    phone: '+375 (29) 321-23-32',
    created_at: '12.12.2012',
    updated_at: '12.12.2012',
  },
];

const items = [
  {
    title: ROUTES.ROOT.TITLE,
    href: ROUTES.ROOT.PATH,
  },
  {
    title: ROUTES.CLIENTS.TITLE,
  },
];

function Clients() {
  const [isClientModalOpen, setIsClientModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [clientsData, setClientsData] = useState([]);

  useEffect(() => {
    getClients();
  }, []);

  const getClients = async () => {
    try {
      await clientsApi.getClients().then((data) => {});
    } catch {
      message.error('Невозможно получить данные');
    } finally {
      setIsLoading(false);
    }
    setClientsData(clientsDataExample);
  };

  const onAddClientClick = () => {
    setIsClientModalOpen(true);
  };

  return (
    <>
      <Row align='middle' justify='space-between'>
        <Col>
          <Typography.Title level={2}>Управление клиентами</Typography.Title>
        </Col>
        <Col>
          {isLoading ? null : (
            <Button type='primary' onClick={onAddClientClick}>
              Добавить клиента
            </Button>
          )}
        </Col>
      </Row>
      <Breadcrumb items={items} />
      <Typography.Text type='secondary'>
        Для просмотра информации о клиенте, кликните на нужную строку
      </Typography.Text>
      {isLoading ? (
        <Skeleton active />
      ) : (
        <ClientsTable clientsData={clientsData} onClientsChange={getClients} />
      )}
      <ClientModal
        type={MODAL_TYPE.ADD}
        isOpen={isClientModalOpen}
        onOk={() => setIsClientModalOpen(false)}
        onCancel={() => setIsClientModalOpen(false)}
        onClientsChange={getClients}
      />
    </>
  );
}

export default Clients;
