import React, { useState, useEffect } from 'react';
import { Typography, Skeleton, Breadcrumb, Row, Col, Button } from 'antd';
import ClientsTable from '@src/components/clients/ClientsTable';
import ClientModal from '@src/components/clients/ClientModal';
import { ROUTES, MODAL_TYPE } from '@constants';

import './sass/index.scss';

const clientsDataExample = [
  {
    key: 1,
    id: 1,
    name: 'ds',
    email: 'sadas',
    phone: '+375 (29) 624-53-80',
    created_at: '12.12.2012',
    updated_at: '12.12.2012',
  },
  {
    key: 2,
    id: 2,
    name: 'fds',
    email: 'sadas',
    phone: '+375 (29) 624-53-80',
    created_at: '12.12.2012',
    updated_at: '12.12.2012',
  },
  {
    key: 3,
    id: 1,
    name: 'fsd',
    email: 'sadas',
    phone: '+375 (29) 624-53-80',
    created_at: '12.12.2012',
    updated_at: '12.12.2012',
  },
  {
    key: 4,
    id: 1,
    name: 'hfgh',
    email: 'sadas',
    phone: '+375 (29) 624-53-80',
    created_at: '12.12.2012',
    updated_at: '12.12.2012',
  },
  {
    key: 5,
    id: 1,
    name: 'asds',
    email: 'sadas',
    phone: '+375 (29) 624-53-80',
    created_at: '12.12.2012',
    updated_at: '12.12.2012',
  },
  {
    key: 6,
    id: 1,
    name: 'rtyrty',
    email: 'sadas',
    phone: '+375 (29) 624-53-80',
    created_at: '12.12.2012',
    updated_at: '12.12.2012',
  },
  {
    key: 7,
    id: 1,
    name: 'cscd',
    email: 'sadas',
    phone: '+375 (29) 624-53-80',
    created_at: '12.12.2012',
    updated_at: '12.12.2012',
  },
  {
    key: 8,
    id: 1,
    name: 'sdgff',
    email: 'sadas',
    phone: '+375 (29) 624-53-80',
    created_at: '13.12.2012',
    updated_at: '12.12.2012',
  },
  {
    key: 9,
    id: 1,
    name: 'sdfsdf',
    email: 'sadas',
    phone: '+375 (29) 624-53-80',
    created_at: '14.12.2012',
    updated_at: '12.12.2012',
  },
  {
    key: 10,
    id: 1,
    name: 'grtt',
    email: 'sadas',
    phone: '+375 (29) 624-53-80',
    created_at: '12.12.2012',
    updated_at: '12.12.2012',
  },
  {
    key: 11,
    id: 1,
    name: 'cdssd',
    email: 'sadas',
    phone: '+375 (29) 624-53-80',
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
  const [isLoading, setIsLoading] = useState(false);
  const [clientsData, setClientsData] = useState([]);

  useEffect(() => {
    getClients();
  }, [clientsDataExample]);

  const getClients = () => {
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
