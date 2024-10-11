export const ROUTER_ROUTES = {
  ROOT: '/',
  FOOTER: '',
  CLIENTS: '/clients',
  TASKS: '/tasks',
  CLIENT_INFO: ':clientID',
};

export const ROUTES = {
  ROOT: { TITLE: 'Главная', PATH: '/' },
  NOT_FOUND: { TITLE: '404', PATH: '*' },
  CLIENTS: { TITLE: 'Управление клиентами', PATH: '/clients' },
  TASKS: { TITLE: 'Задачи', PATH: '/tasks' },
  CLIENT_INFO: {
    TITLE: 'Информация о клиенте',
    PATH: (clientID) => `/clients/${clientID}`,
  },
};

export const TABLE_LOCALE = {
  triggerDesc: 'Нажмите, чтобы сортировать по убыванию',
  triggerAsc: 'Нажмите, чтобы сортировать по возрастанию',
  cancelSort: 'Нажмите, чтобы отменить сортировку',
  filterReset: 'Отменить',
  filterConfirm: 'Ок',
};

export const MODAL_TYPE = {
  ADD: 'add',
  EDIT: 'edit',
};
