import React, { useState, useEffect } from 'react';
import {
  Typography,
  Skeleton,
  Breadcrumb,
  Row,
  Col,
  Button,
  message,
} from 'antd';
import TasksTable from '@src/components/tasks/TasksTable';
import TaskModal from '@src/components/tasks/TaskModal';
import { ROUTES, MODAL_TYPE } from '@constants';
import { tasksApi } from '@api';

import './sass/index.scss';

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
  const [isLoading, setIsLoading] = useState(true);
  const [tasksData, setTasksData] = useState([]);

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = async () => {
    try {
      await tasksApi.getTasks().then((data) => {
        setTasksData(data);
      });
    } catch {
      message.error('Невозможно получить данные');
    } finally {
      setIsLoading(false);
    }
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
