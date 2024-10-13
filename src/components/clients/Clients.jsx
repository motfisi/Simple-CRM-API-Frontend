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
      await clientsApi.getClients().then((data) => {
        console.log(data);

        setClientsData(data);
      });
    } catch {
      message.error('Невозможно получить данные');
    } finally {
      setIsLoading(false);
    }
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
