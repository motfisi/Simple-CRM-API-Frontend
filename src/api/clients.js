import { instance } from '.';

export const clientsApi = {
  getClients: () => instance.get(`/clients/getAll`).then((res) => res.data),
  getClientById: (id) => instance.get(`/clients/${id}`).then((res) => res.data),
  addClient: (body) => instance.post(`/clients/create`, body),
  changeClient: (body) => instance.put(`/clients/update`, body),
  deleteClient: (id) => instance.delete(`/clients/${id}`),
};
