import { instance } from '.';

export const tasksApi = {
  getTasks: () => instance.get(`/tasks/getTasks`).then((res) => res.data),
  getTaskById: (params) =>
    instance.get(`/tasks/getTaskById`, { params }).then((res) => res.data),
  addTask: (params) => instance.post(`/tasks/addTask`, { params }),
  changeTask: (params) => instance.post(`/tasks/changeTask`, { params }),
  deleteTask: (params) => instance.post(`/tasks/deleteTask`, { params }),
};
