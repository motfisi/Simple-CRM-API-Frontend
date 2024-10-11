import React from 'react';
import { Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

import './sass/index.scss';
import { ROUTES } from '@constants';

function Initial() {
  const navigate = useNavigate();

  const handleNavigateToClients = () => {
    navigate(ROUTES.CLIENTS.PATH);
  };

  const handleNavigateToTasks = () => {
    navigate(ROUTES.TASKS.PATH);
  };

  return (
    <div className='initial__sides'>
      <div
        className='initial__sides__clients'
        onClick={handleNavigateToClients}
      >
        <Typography.Text className='initial__typography-text-clients'>
          КЛИЕНТЫ
        </Typography.Text>
      </div>
      <div className='initial__sides__tasks' onClick={handleNavigateToTasks}>
        <Typography.Text className='initial__typography-text-tasks'>
          ЗАДАЧИ
        </Typography.Text>
      </div>
    </div>
  );
}

export default Initial;
