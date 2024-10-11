export const getStatus = (status) => {
  switch (status) {
    case 'pending':
      return 'В обработке';
    case 'in_progress':
      return 'Выполняется';
    case 'completed':
      return 'Завершена';
    default:
      return 'Неизвестно';
  }
};
