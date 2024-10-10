export const ROUTER_ROUTES = {
  ROOT: '/',
  CLIENTS: '/clients',
  TASKS: '/tasks',
};

export const ROUTES = {
  ROOT: { TITLE: 'Главная', PATH: '/' },
  NOT_FOUND: { TITLE: '404', PATH: '*' },
  CLIENTS: { TITLE: 'Клиенты', PATH: '/clients' },
  TASKS: { TITLE: 'Задачи', PATH: '/tasks' },
  CLIENT_INFO: {
    TITLE: 'Информация о клиенте',
    PATH: (clientID) => `/clients/${clientID}`,
  },
};
