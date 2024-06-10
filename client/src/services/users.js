import api from './api';

export default {
  getUsers() {
    return api.get('/users');
  },
  getUser(id) {
    return api.get(`/users/${id}`);
  },
  createUser(user) {
    return api.post('/users', user);
  },
  updateUser(id, user) {
    return api.put(`/users/${id}`, user);
  },
  deleteUser(id) {
    return api.delete(`/users/${id}`);
  },
};
