import { instance } from '.';

export const clientsApi = {
  getClients: () => instance.get(`/clients/getClients`).then((res) => res.data),
  getClientById: (params) =>
    instance.get(`/clients/getClientById`, { params }).then((res) => res.data),
  addClient: (params) => instance.post(`/clients/addClient`, { params }),
  changeClient: (params) => instance.post(`/clients/changeClient`, { params }),
  deleteClient: (params) => instance.post(`/clients/deleteClient`, { params }),
};
