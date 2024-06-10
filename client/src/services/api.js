import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {
  getProducts() {
    return apiClient.get('/products');
  },
  getProduct(id) {
    return apiClient.get(`/products/${id}`);
  },
  createOrder(order) {
    return apiClient.post('/orders', order);
  },
};
