import api from './api';

export default {
  getProducts() {
    return api.get('/products');
  },
  getProduct(id) {
    return api.get(`/products/${id}`);
  },
};
