import React, { useState } from 'react';
import { Typography, Skeleton, Breadcrumb, Row, Col } from 'antd';
import { ROUTES } from '@constants';
import client from '@src/assets/img/client.png';

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
  const [isLoading, setIsLoading] = useState(false);

  const clientData = {
    key: 1,
    name: 'Asdsad',
    email: 'sadas',
    phone: '+375 (29) 624-53-80',
    created_at: '12.12.2012',
    updated_at: '12.12.2012',
  };

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
