import api from './api';

export default {
  getOrders() {
    return api.get('/orders');
  },
  getOrder(id) {
    return api.get(`/orders/${id}`);
  },
  createOrder(order) {
    return api.post('/orders', order);
  },
  updateOrder(id, order) {
    return api.put(`/orders/${id}`, order);
  },
  deleteOrder(id) {
    return api.delete(`/orders/${id}`);
  },
  updateOrderStatus(id){
    return api.patch(`/orders/${id}/status`, id);
  }
};
