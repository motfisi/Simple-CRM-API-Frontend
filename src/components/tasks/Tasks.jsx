import React, { useState, useEffect } from 'react';
import { Typography, Skeleton, Breadcrumb, Row, Col, Button } from 'antd';
import TasksTable from '@src/components/tasks/TasksTable';
import TaskModal from '@src/components/tasks/TaskModal';
import { ROUTES, MODAL_TYPE } from '@constants';

import './sass/index.scss';

const tasksDataExample = [
  {
    key: 1,
    id: 1,
    user_name: 'ds',
    user_id: 1,
    title: 'sadas',
    description: '+375 (29) 624-53-80',
    status: 'pending',
    created_at: '12.12.2012',
    updated_at: '12.12.2012',
  },
];

const items = [
  {
    title: ROUTES.ROOT.TITLE,
    href: ROUTES.ROOT.PATH,
  },
  {
    title: ROUTES.TASKS.TITLE,
  },
];

function Tasks() {
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [tasksData, setTasksData] = useState([]);

  useEffect(() => {
    getTasks();
  }, [tasksDataExample]);

  const getTasks = () => {
    setTasksData(tasksDataExample);
  };

  const onAddTaskClick = () => {
    setIsTaskModalOpen(true);
  };

  return (
    <>
      <Row align='middle' justify='space-between'>
        <Col>
          <Typography.Title level={2}>Управление задачами</Typography.Title>
        </Col>
        <Col>
          {isLoading ? null : (
            <Button type='primary' onClick={onAddTaskClick}>
              Добавить задачу
            </Button>
          )}
        </Col>
      </Row>
      <Breadcrumb items={items} />
      <Typography.Text type='secondary'>
        Для просмотра информации о задаче, кликните на нужную строку
      </Typography.Text>
      {isLoading ? (
        <Skeleton active />
      ) : (
        <TasksTable tasksData={tasksData} onTasksChange={getTasks} />
      )}
      <TaskModal
        type={MODAL_TYPE.ADD}
        isOpen={isTaskModalOpen}
        onOk={() => setIsTaskModalOpen(false)}
        onCancel={() => setIsTaskModalOpen(false)}
        onTasksChange={getTasks}
      />
    </>
  );
}

export default Tasks;
