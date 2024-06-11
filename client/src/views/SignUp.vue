<template>
    <div class="signup-page">
      <div class="signup-container">
        <div class="header">
          <h3>Sign Up</h3>
        </div>
        <form ref="form" @submit.prevent="handleSignUp" class="needs-validation" novalidate>
          <div class="form-group">
            <label for="username" class="field-title">Username:</label>
            <input type="text" id="username" v-model="username" class="form-control" required>
            <div class="invalid-feedback">Please enter a username.</div>
          </div>
          <div class="form-group">
            <label for="email" class="field-title">Email:</label>
            <input type="email" id="email" v-model="email" class="form-control" required>
            <div class="invalid-feedback">Please enter a valid email address.</div>
          </div>
          <div class="form-group">
            <label for="password" class="field-title">Password:</label>
            <input type="password" id="password" v-model="password" class="form-control" required>
            <div class="invalid-feedback">Please enter a password.</div>
          </div>
          <button type="submit" class="btn btn-primary">Sign Up</button>
        </form>
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
        <p class="login-text">Already have an account? <router-link to="/login">Login</router-link></p>
      </div>
    </div>
  </template>
  
  <script>
  import api from '../services/users';
  import { mapActions } from 'vuex';
  import router from '@/router';
  
  export default {
    name: 'SignUpPage',
    data() {
      return {
        username: '',
        email: '',
        password: '',
        errorMessage: '',
      };
    },
    methods: {
      ...mapActions(['signup']),
      async handleSignUp() {
        if (this.$refs.form.checkValidity()) {
          try {
            const response = await api.userSignUp(this.username, this.email, this.password);
            if (response.status === 200) {
              this.signup(response.data.user);
              router.push('/');
            } else {
              this.errorMessage = response.data.message || 'An error occurred. Please try again.';
            }
          } catch (error) {
            this.errorMessage = 'An error occurred. Please try again.';
          }
        } else {
          event.preventDefault();
          event.stopPropagation();
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .signup-page {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #f8dede;
  }
  
  .signup-container {
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
  input[type="email"],
  input[type="password"] {
    width: 100%;
    padding: 8px;
    border-radius: 4px;
  }
  
  .invalid-feedback {
    display: none;
    color: red;
  }
  
  .btn-primary {
    width: 100%;
    padding: 8px 16px;
    cursor: pointer;
  }
  
  .btn-primary:hover {
    background-color: #ffb6c1;
  }
  
  .error-message {
    color: red;
    margin-top: 10px;
  }
  
  .login-text {
    text-align: center;
    color: #888;
    font-size: 0.9em;
    margin-top: 15px;
  }
  </style>
  