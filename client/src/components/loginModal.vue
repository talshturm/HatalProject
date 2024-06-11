<template>
    <div class="login-modal">
      <div class="login-modal-content">
        <span class="close" @click="$emit('close')"><i class="bi bi-x"></i></span>
        <div class="header">
          <h3>Login</h3>
        </div>
        <form @submit.prevent="userLogin">
          <div class="form-group">
            <label for="username" class="field-title">Username:</label>
            <input type="text" id="username" v-model="username" required>
          </div>
          <div class="form-group">
            <label for="password" class="field-title">Password:</label>
            <input type="password" id="password" v-model="password" required>
          </div>
          <button type="submit" class="login-button">Login</button>
        </form>
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
        <p class="signup-text">Don't have an account? <button @click="handleSignUp" class="signup-button">Sign up</button></p>
      </div>
    </div>
  </template>
  
  <script>
  import api from '../services/users';
  import { mapActions } from 'vuex';
  import router from '@/router';

  export default {
    name: 'LoginModal',
    data() {
      return {
        username: '',
        password: '',
        errorMessage: ''
      };
    },
    methods: {
        ...mapActions(['login']),
        handleSignUp() {
      this.$emit('close');
      router.push('/signup');
    },
      async userLogin() {
        try {
          const response = await api.userLogin(this.username, this.password);
          if (response.status===200) {
            const user = response.data.user;
            this.login(user);
            this.$emit('close');
            router.push('/');
          } else {
            this.errorMessage = 'Invalid username or password';
          }
        } catch (error) {
            if (error.response || error.response.status === 404) {
                this.errorMessage = 'Invalid username or password';
            } else {
                this.errorMessage = 'An error occurred. Please try again.';
            }   
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .login-modal {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); 
    z-index: 999;
  }
  
  .login-modal-content {
    position: relative; 
    background-color: #fefefe;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    width: 400px; 
  }
  
  .header {
    text-align: center;
  }
  
  .header h3 {
    font-family: 'Arial', sans-serif; 
    font-size: 1.5em; 
    margin-bottom: 15px;
  }
  
  .close {
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 1.2em; 
  }
  
  .field-title {
    font-weight: bold;
    font-size: 1em; 
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
  }
  
  input[type="text"],
  input[type="password"] {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .login-button {
    width: 100%;
    padding: 8px 16px;
    background-color: #f8dede; 
    color: #333; 
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .login-button:hover {
    background-color: #ffb6c1;  
  }
  
  .error-message {
    color: red;
    margin-top: 10px;
  }
  
  .signup-text {
    text-align: center;
    color: #888; 
    font-size: 0.9em; 
    margin-top: 15px;
  }

  .signup-button {
    border: 0px;
    background-color: white;
    padding: 0%;
    text-decoration: underline;
  }
  </style>
  