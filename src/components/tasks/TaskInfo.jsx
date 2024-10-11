import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Skeleton, Breadcrumb, Row, Col } from 'antd';
import { ROUTES } from '@constants';
import client from '@src/assets/img/client.png';

import './sass/index.scss';

const mainPage = {
  title: ROUTES.ROOT.TITLE,
  href: ROUTES.ROOT.PATH,
};

const clientsPage = {
  title: ROUTES.TASKS.TITLE,
  href: ROUTES.TASKS.PATH,
};

function ClientInfo() {
  const [isLoading, setIsLoading] = useState(false);
  const { taskID } = useParams();

  const taskData = {
    key: 1,
    title: 'Asdsad',
    email: 'sadas',
    phone: '+375 (29) 624-53-80',
    created_at: '12.12.2012',
    updated_at: '12.12.2012',
  };

  const items = [
    mainPage,
    clientsPage,
    {
      title: taskData.title,
    },
  ];

  return (
    <>
      <Typography.Title level={2}>Информация о задаче</Typography.Title>
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
        <>
          <Typography.Title level={4}>Имя: {taskData.title}</Typography.Title>
        </>
      )}
    </>
  );
}

export default ClientInfo;
