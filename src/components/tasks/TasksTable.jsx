import React, { useState } from 'react';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Button, Flex, Table, Tooltip } from 'antd';
import { TABLE_LOCALE, ROUTES, MODAL_TYPE, STATUSES } from '@constants';
import { getStatus } from '@utils';
import { useNavigate } from 'react-router-dom';
import TaskModal from '@src/components/tasks/TaskModal';

const client_column = {
  title: 'Клиент',
  key: 'user_name',
  dataIndex: 'user_name',
  sorter: (a, b) => {
    const firstFullName = a.name;
    const secondFullName = b.name;

    return firstFullName.localeCompare(secondFullName);
  },
};

const task_column = {
  title: 'Задача',
  key: 'title',
  dataIndex: 'title',
};

const description_column = {
  title: 'Описание',
  key: 'description',
  dataIndex: 'description',
};
const status_column = {
  title: 'Статус',
  key: 'status',
  dataIndex: 'status',
  render: (record) => {
    return getStatus(record);
  },
  filters: STATUSES,
  onFilter: (value, record) => record.status.indexOf(value) === 0,
};

const created_column = {
  title: 'Создан',
  key: 'created_at',
  dataIndex: 'created_at',
  sorter: (a, b) => new Date(a.created_at) - new Date(b.created_at),
};

const updated_column = {
  title: 'Обновлён',
  key: 'updated_at',
  dataIndex: 'updated_at',
  sorter: (a, b) => new Date(a.updated_at) - new Date(b.updated_at),
};

function TasksTable({ tasksData, onTasksChange }) {
  const navigate = useNavigate();
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [selectedTaskData, setSelectedTaskData] = useState();

  const openTaskModal = (data) => {
    setSelectedTaskData(data);
    setIsTaskModalOpen(true);
  };

  const deleteTask = (id) => {
    onTasksChange();
  };

  const columns = [
    client_column,
    task_column,
    description_column,
    status_column,
    created_column,
    updated_column,
    {
      title: 'Действия',
      key: 'action',
      render: (_, record) => (
        <Flex>
          <Tooltip title='Редактировать'>
            <Button
              type='text'
              icon={<EditOutlined />}
              onClick={(e) => {
                e.stopPropagation();
                openTaskModal(record);
              }}
            />
          </Tooltip>
          <Tooltip title='Удалить'>
            <Button
              type='text'
              icon={<DeleteOutlined />}
              onClick={(e) => {
                e.stopPropagation();
                deleteTask(record.id);
              }}
            />
          </Tooltip>
        </Flex>
      ),
    },
  ];

  return (
    <>
      <Table
        dataSource={tasksData}
        columns={columns}
        pagination={{
          position: ['bottomCenter'],
          pageSize: 5,
        }}
        locale={TABLE_LOCALE}
        onRow={(record) => ({
          onClick: () => {
            navigate(`${ROUTES.TASK_INFO.PATH(record.id)}`);
          },
        })}
      />
      <TaskModal
        type={MODAL_TYPE.EDIT}
        taskData={selectedTaskData}
        isOpen={isTaskModalOpen}
        onOk={() => setIsTaskModalOpen(false)}
        onCancel={() => setIsTaskModalOpen(false)}
        onTasksChange={onTasksChange}
      />
    </>
  );
}

export default TasksTable;
