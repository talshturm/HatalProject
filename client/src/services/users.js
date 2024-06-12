import api from './api';

export default {
  getUsers() {
    return api.get('/users');
  },
  getUser(id) {
    return api.get(`/users/${id}`);
  },
  getUserOrders(id) {
    return api.get(`/users/${id}/orders`);
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
  userLogin(user, pass) {
    return api.post('/login',{
        username: user,
        password: pass,
      })
  }
};
