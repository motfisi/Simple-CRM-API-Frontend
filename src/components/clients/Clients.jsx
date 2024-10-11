import React, { useState } from 'react';
import { Typography, Skeleton, Breadcrumb, Row, Col, Button } from 'antd';
import ClientsTable from '@src/components/clients/ClientsTable';
import ClientModal from '@src/components/clients/ClientModal';
import { ROUTES, MODAL_TYPE } from '@constants';

import './sass/index.scss';

const clientsData = [
  {
    key: 1,
    name: 'Asdsad',
    email: 'sadas',
    phone: '+375 (29) 624-53-80',
    created_at: '12.12.2012',
    updated_at: '12.12.2012',
  },
  {
    key: 2,
    name: 'Asdsad',
    email: 'sadas',
    phone: '+375 (29) 624-53-80',
    created_at: '12.12.2012',
    updated_at: '12.12.2012',
  },
  {
    key: 3,
    name: 'Asdsad',
    email: 'sadas',
    phone: '+375 (29) 624-53-80',
    created_at: '12.12.2012',
    updated_at: '12.12.2012',
  },
  {
    key: 4,
    name: 'Asdsad',
    email: 'sadas',
    phone: '+375 (29) 624-53-80',
    created_at: '12.12.2012',
    updated_at: '12.12.2012',
  },
  {
    key: 5,
    name: 'Asdsad',
    email: 'sadas',
    phone: '+375 (29) 624-53-80',
    created_at: '12.12.2012',
    updated_at: '12.12.2012',
  },
  {
    key: 6,
    name: 'Asdsad',
    email: 'sadas',
    phone: '+375 (29) 624-53-80',
    created_at: '12.12.2012',
    updated_at: '12.12.2012',
  },
  {
    key: 7,
    name: 'Asdsad',
    email: 'sadas',
    phone: '+375 (29) 624-53-80',
    created_at: '12.12.2012',
    updated_at: '12.12.2012',
  },
  {
    key: 8,
    name: 'Asdsad',
    email: 'sadas',
    phone: '+375 (29) 624-53-80',
    created_at: '12.12.2012',
    updated_at: '12.12.2012',
  },
  {
    key: 9,
    name: 'Asdsad',
    email: 'sadas',
    phone: '+375 (29) 624-53-80',
    created_at: '12.12.2012',
    updated_at: '12.12.2012',
  },
  {
    key: 10,
    name: 'Asdsad',
    email: 'sadas',
    phone: '+375 (29) 624-53-80',
    created_at: '12.12.2012',
    updated_at: '12.12.2012',
  },
  {
    key: 11,
    name: 'Asdsad',
    email: 'sadas',
    phone: '+375 (29) 624-53-80',
    created_at: '12.12.2012',
    updated_at: '12.12.2012',
  },
];

const items = [
  {
    title: 'Главная',
    href: ROUTES.ROOT.PATH,
  },
  {
    title: 'Управление клиентами',
  },
];

function Clients() {
  const [isClientModalOpen, setIsClientModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
        <ClientsTable clientsData={clientsData} />
      )}
      <ClientModal
        type={MODAL_TYPE.ADD}
        isOpen={isClientModalOpen}
        onOk={() => setIsClientModalOpen(false)}
        onCancel={() => setIsClientModalOpen(false)}
      />
    </>
  );
}

export default Clients;
