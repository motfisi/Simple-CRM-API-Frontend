import dayjs from 'dayjs';

export const getStatus = (status) => {
  switch (status) {
    case 'PENDING':
      return 'В обработке';
    case 'IN_PROGRESS':
      return 'Выполняется';
    case 'COMPLETED':
      return 'Завершена';
    default:
      return 'Неизвестно';
  }
};

export const changeDateFormat = (dateArray) => {
  return dayjs(
    new Date(
      dateArray[0],
      dateArray[1] - 1,
      dateArray[2],
      dateArray[3] + 3,
      dateArray[4],
      dateArray[5],
      Math.floor(dateArray[6] / 1000000)
    )
  ).format('DD.MM.YYYY HH:mm:ss');
};
