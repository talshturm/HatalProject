import api from './api';

export default {
  getFeedbacks() {
    return api.get('/feedbacks');
  },
  createFeedback(feedback) {
    return api.post('/feedbacks', feedback)
  }
};