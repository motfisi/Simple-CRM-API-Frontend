import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Skeleton, Breadcrumb, Row, Col, message } from 'antd';
import { ROUTES } from '@constants';
import client from '@assets/img/client.png';
import { clientsApi } from '@api';

import './sass/index.scss';

const mainPage = {
  title: ROUTES.ROOT.TITLE,
  href: ROUTES.ROOT.PATH,
};

const clientsPage = {
  title: ROUTES.CLIENTS.TITLE,
  href: ROUTES.CLIENTS.PATH,
};

function ClientInfo() {
  const [isLoading, setIsLoading] = useState(true);
  const { clientID } = useParams();

  const clientData = {
    key: 1,
    name: 'тут должна',
    email: 'быть информация',
    phone: 'о клиенте по id',
  };

  const getClient = async () => {
    try {
      const body = {
        client_id: clientID,
      };
      await clientsApi.getClientById(body).then((data) => {});
      setIsLoading(false);
    } catch {
      message.error('Невозможно получить данные');
    }
  };

  useEffect(() => {
    getClient();
  }, [clientID]);

  const items = [
    mainPage,
    clientsPage,
    {
      title: clientData.name,
    },
  ];

  return (
    <>
      <Typography.Title level={2}>Информация о клиенте</Typography.Title>
      <Breadcrumb items={items} />

      {isLoading ? (
        <Skeleton
          active
          avatar
          paragraph={{
            rows: 4,
          }}
        />
      ) : (
        <Row align='middle'>
          <Col
            lg={6}
            xl={6}
            xxl={6}
            xs={24}
            sm={24}
            md={12}
            className='clients__client-info__img-container'
          >
            <img src={client} className='clients__client-info__img' />
          </Col>
          <Col lg={18} xl={18} xxl={18} xs={24} sm={24} md={12}>
            <Typography.Title level={4}>
              Имя: {clientData.name}
            </Typography.Title>
            <Typography.Title level={4}>
              Email: {clientData.email}
            </Typography.Title>
            <Typography.Title level={4}>
              Телефон: {clientData.phone}
            </Typography.Title>
          </Col>
        </Row>
      )}
    </>
  );
}

export default ClientInfo;
