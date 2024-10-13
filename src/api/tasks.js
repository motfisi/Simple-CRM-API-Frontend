import { instance } from '.';

export const tasksApi = {
  getTasks: () => instance.get(`/tasks/getAll`).then((res) => res.data),
  getTaskById: (id) => instance.get(`/tasks/${id}`).then((res) => res.data),
  addTask: (body) => instance.post(`/tasks/create`, body),
  changeTask: (body) => instance.put(`/tasks/update`, body),
  deleteTask: (id) => instance.delete(`/tasks/${id}`),
};
