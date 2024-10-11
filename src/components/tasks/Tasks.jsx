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
    user_name: 'Матвей',
    user_id: 1,
    title: 'Помыть пол',
    description: 'Отмыть пол до блеска с моющим средство',
    status: 'pending',
    created_at: '12.12.2008',
    updated_at: '12.12.2023',
  },
  {
    key: 2,
    id: 2,
    user_name: 'Иван',
    user_id: 2,
    title: 'Починить выдвижной ящик',
    description: 'Выдвижной ящик должен выезжать',
    status: 'completed',
    created_at: '01.03.2023',
    updated_at: '01.08.2024',
  },
  {
    key: 3,
    id: 3,
    user_name: 'Петя',
    user_id: 3,
    title: 'Закончить универ (опционально)',
    description: 'Ну хотя бы до защиты диплома продержаться',
    status: 'in_progress',
    created_at: '06.12.2023',
    updated_at: '01.09.2024',
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
