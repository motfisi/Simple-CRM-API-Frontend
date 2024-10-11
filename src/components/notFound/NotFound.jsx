import React from 'react';
import { Button, Result } from 'antd';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '@constants';

function NotFound() {
  return (
    <Result
      status='404'
      title='Страница не найдена!'
      extra={
        <NavLink to={ROUTES.ROOT.PATH}>
          <Button type='primary'>Главная</Button>
        </NavLink>
      }
    />
  );
}

export default NotFound;
