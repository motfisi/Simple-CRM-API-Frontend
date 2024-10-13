import React, { useState } from 'react';
import { EditOutlined, DeleteOutlined, MessageFilled } from '@ant-design/icons';
import { Button, Flex, Popconfirm, Table, Tooltip, message } from 'antd';
import { TABLE_LOCALE, ROUTES, MODAL_TYPE, STATUSES } from '@constants';
import { getStatus } from '@utils';
import { useNavigate } from 'react-router-dom';
import TaskModal from '@src/components/tasks/TaskModal';
import { tasksApi } from '@api';
import { changeDateFormat } from '@utils';

const client_column = {
  title: 'Клиент',
  key: 'clientName',
  dataIndex: 'clientName',
  sorter: (a, b) => {
    const firstName = a.clientName;
    const secondName = b.clientName;

    return firstName.localeCompare(secondName);
  },
};

const task_column = {
  title: 'Задача',
  key: 'title',
  dataIndex: 'title',
  sorter: (a, b) => {
    const firstTask = a.title;
    const secondTask = b.title;

    return firstTask.localeCompare(secondTask);
  },
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
  key: 'createdAt',
  dataIndex: 'createdAt',
  render: (date) => changeDateFormat(date),
  sorter: (a, b) => {
    const dateA = new Date(Date.UTC(...a.createdAt));
    const dateB = new Date(Date.UTC(...b.createdAt));
    return dateA - dateB;
  },
};

const updated_column = {
  title: 'Обновлён',
  key: 'updatedAt',
  dataIndex: 'updatedAt',
  render: (date) => changeDateFormat(date),
  sorter: (a, b) => {
    const dateA = new Date(Date.UTC(...a.updatedAt));
    const dateB = new Date(Date.UTC(...b.updatedAt));
    return dateA - dateB;
  },
};

function TasksTable({ tasksData, onTasksChange }) {
  const navigate = useNavigate();
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [selectedTaskData, setSelectedTaskData] = useState();

  const openTaskModal = (data) => {
    setSelectedTaskData(data);
    setIsTaskModalOpen(true);
  };

  const onDeleteConfirm = (e, id) => {
    e.stopPropagation();
    deleteTask(id);
  };

  const deleteTask = async (id) => {
    try {
      await tasksApi.deleteTask(id);
      message.success('Задача успешно удалена');
      onTasksChange();
    } catch {
      message.error('Не удалось удалить задачу');
    }
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
            <Popconfirm
              title='Удаление задачи'
              description='Вы уверены, что хотите удалить эту задачу?'
              onConfirm={(e) => onDeleteConfirm(e, record.id)}
              onCancel={(e) => e.stopPropagation()}
              placement='leftTop'
              okText='Да'
              cancelText='Отмена'
            >
              <Button
                type='text'
                icon={<DeleteOutlined />}
                onClick={(e) => {
                  e.stopPropagation();
                }}
              />
            </Popconfirm>
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
