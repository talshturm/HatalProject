<template>
    <div class="feedback-page">
        <header class="page-header">
      <h1 class="page-title">Contact Us</h1>
    </header>
    <div class="feedback-form-container">
      <form @submit.prevent="submitForm" class="feedback-form">
        <input type="text" v-model="fullName" placeholder="Full Name">
        <input type="email" v-model="email" placeholder="Email">
        <input type="tel" v-model="phone" placeholder="Phone">
        <textarea v-model="message" placeholder="Message"></textarea>
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
        <button type="submit">Submit</button>
      </form>
      <br/><br/>
    </div>
</div>
  </template>
  <script>
import router from '../router/index.js';
import api from '../services/feedbacks.js';
  import Swal from 'sweetalert2';

  export default {
    data() {
      return {
        fullName: '',
        email: '',
        phone: '',
        message: '',
        errorMessage: '',
      };
    },
    methods: {
      async submitForm() {
        event.preventDefault();
        event.stopPropagation();

        if (!this.fullName || !this.email || !this.phone || !this.message) {
        this.errorMessage = 'Please fill in all fields';
        return;
      }
      try {
        const feedback = {
          name: this.fullName,
          email: this.email,
          phoneNumber: this.phone,
          message: this.message,
        };
        const response = await api.createFeedback(feedback);
        if (response.status === 201) {
            Swal.fire({
        position: 'bottom-left',
        icon: 'success',
        title: 'Feedback sent',
        showConfirmButton: false,
        timer: 1500,
        toast: true,
        showClass: {
            popup: ''
          },
          hideClass: {
            popup: ''
          },
        customClass: {
          container: 'swal-custom-container',
        }})
          router.push('/');
        } else {
          this.errorMessage = 'An error occurred. Please try again';
        }
      } catch (error) {
        this.errorMessage = 'An error occurred. Please try again';
      }
      }
    }
  };
  </script>
<style scoped>
.feedback-page {
    display: flex;
    flex-direction: column;
    align-items: center;
}


.feedback-form-container {
  border-radius: 5px;
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
    background-color: white
}

.feedback-form {
  display: flex;
  flex-direction: column;
}

.feedback-form input,
.feedback-form textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.feedback-form textarea {
  height: 100px;
  resize: none;
}

.feedback-form button {
    background-color: #f8dede; 
    margin-left: 30%;
    width: 40%;
    padding: 8px 16px;
    color: #333; 
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .feedback-form button:hover {
    background-color: #ffb6c1;
  }
  
  .error-message {
    color: red;
    margin-top: 10px;
  }

.page-header {
  text-align: center;
}

.page-title {
  font-size: 3rem;
  color: #333;
  font-family: 'Pacifico', cursive;
  letter-spacing: 1px;
  margin-bottom: 30px;
}
</style>
  