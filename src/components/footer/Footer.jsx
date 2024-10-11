import React from 'react';
import { Typography } from 'antd';
import { Outlet } from 'react-router-dom';

import './sass/footer.scss';

function Footer() {
  return (
    <>
      <div id='content' className='global-container'>
        <Outlet />
      </div>
      <div id='footer' className='footer'>
        <Typography.Text className='footer__text'>
          Simple-CRM-API | Front by{' '}
          <a href='https://t.me/motfisi' target='_blank'>
            <Typography.Text strong className='footer__text__href'>
              motfisi
            </Typography.Text>
          </a>{' '}
          | Back by{' '}
          <a href='https://t.me/zhur4k' target='_blank'>
            <Typography.Text strong className='footer__text__href'>
              zhur4k
            </Typography.Text>
          </a>
          <br />© All rights are reserved.
        </Typography.Text>
      </div>
    </>
  );
}

export default Footer;
