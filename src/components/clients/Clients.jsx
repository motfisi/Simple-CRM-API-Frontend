import React from 'react';
import { Typography } from 'antd';
import ClientsTable from '@src/components/clients/ClientsTable';

import './sass/index.scss';

const clientsData = [
  {
    key: 1,
    name: 'Asdsad',
    email: 'sadas',
  },
];

function Clients() {
  return (
    <>
      <ClientsTable clientsData={clientsData} />
    </>
  );
}

export default Clients;
