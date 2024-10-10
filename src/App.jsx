import React, { useState } from 'react';
import { Button, Table } from 'antd';

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <Button type='primary' loading={loading}>
        Fetch Data
      </Button>
      <Table columns={columns} dataSource={data} rowKey='id' />
    </div>
  );
};

export default App;
