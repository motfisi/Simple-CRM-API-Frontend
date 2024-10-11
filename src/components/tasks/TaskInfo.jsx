import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Skeleton, Breadcrumb } from 'antd';
import { ROUTES } from '@constants';
import { getStatus } from '@utils';

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
    id: 1,
    user_name: 'Aasd',
    user_id: 1,
    title: 'sadas',
    description: 'sdbfasdfsadfas',
    status: 'pending',
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
          <Typography.Title level={4}>Задача:</Typography.Title>
          <Typography.Text>{taskData.title}</Typography.Text>
          <Typography.Title level={4}>Описание:</Typography.Title>
          <Typography.Text>{taskData.description}</Typography.Text>
          <Typography.Title level={4}>Клиент:</Typography.Title>
          <Typography.Text>{taskData.user_name}</Typography.Text>
          <Typography.Title level={4}>Статус:</Typography.Title>
          <Typography.Text>{getStatus(taskData.status)}</Typography.Text>
        </>
      )}
    </>
  );
}

export default ClientInfo;
