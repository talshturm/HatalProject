<template>
    <div class="signup-page">
      <div class="signup-container">
        <div class="header">
          <h3>Sign Up</h3>
        </div>
        <form ref="form" @submit.prevent="handleSignUp" class="needs-validation">
          <div class="row">
            <div class="col">
              <div class="form-group">
                <label for="username" class="field-title">Username:</label>
                <input type="text" id="username" v-model="username" class="form-control">
              </div>
            </div>
            <div class="col">
              <div class="form-group">
                <label for="firstName" class="field-title">First Name:</label>
                <input type="text" id="firstName" v-model="firstName" class="form-control">
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <div class="form-group">
                <label for="lastName" class="field-title">Last Name:</label>
                <input type="text" id="lastName" v-model="lastName" class="form-control">
              </div>
            </div>
            <div class="col">
              <div class="form-group">
                <label for="email" class="field-title">Email:</label>
                <input type="email" id="email" v-model="email" class="form-control">
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col">
                <div class="form-group">
                    <label for="address" class="field-title">Address:</label>
                    <input type="text" id="address" v-model="address" class="form-control">
                </div>
            </div>
            <div class="col">
                <div class="form-group">
                    <label for="password" class="field-title">Password:</label>
                    <input type="password" id="password" v-model="password" class="form-control">
                </div>
            </div>
          </div>
          <br/>
          <button type="submit" class="signup-button">Sign Up</button>
        </form>
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
        <p class="login-text">Already have an account? <button class="login-button" @click="openLoginModal">login</button></p>
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
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        address: '',
        errorMessage: '',
      };
    },
    methods: {
      ...mapActions(['login']),
      openLoginModal() {
      this.$emit('open-login-modal');
    },
      async handleSignUp(event) {
        event.preventDefault();
  event.stopPropagation();

        if (!this.username || !this.firstName || !this.lastName || !this.email || !this.password || !this.address) {
        this.errorMessage = 'Please fill in all fields.';
        return;
      }
      try {
        const user = {
          username: this.username,
          firstName: this.firstName,
          lastName: this.lastName,
          password: this.password,
          address: this.address,
          email: this.email
        }
        const response = await api.createUser(user);
        if (response.status === 201) {
          const newUser = await api.userLogin(user.username, user.password);
          this.login(newUser.data.user);
          router.push('/');
        } else {
          this.errorMessage = 'An error occurred. Please try again.';
        }
      } catch (error) {
        this.errorMessage = 'An error occurred. Please try again.';
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
    background-color: white
  }
  
  .signup-container {
    padding: 20px;
    width: 600px;
  }
  
  .header {
    text-align: center;
  }
  
  .header h3 {
    font-family: 'Arial', sans-serif;
    font-size: 1.5em;
    margin-bottom: 20px;
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

  
  .signup-button {
    background-color: #f8dede; 
    margin-left: 30%;
    width: 40%;
    padding: 8px 16px;
    color: #333; 
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .signup-button:hover {
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

  .login-button {
    background-color: white;
    border: 0;
    padding: 0;
    text-decoration: underline;
  }
  </style>
  