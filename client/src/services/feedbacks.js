import api from './api';

export default {
  getFeedbacks() {
    return api.get('/feedbacks');
  },
  createFeedback() {
    return api.post('/feedbacks')
  }
};