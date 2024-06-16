<template>
    <div>
        <section class="hero">
      <div class="hero-content">
        <h1>Welcome to STZ Jewelry</h1>
        <p>Discover our exquisite collection of jewelry, crafted with care and precision.</p>
        <router-link to="/products" class="btn btn-primary">Shop Now</router-link>
      </div>
    </section>
    </div>
  </template>
  
  
  <style scoped>
  .hero {
    background: url('../../public/logo.png') no-repeat center center/cover;
    min-height: 100%;
    color: white;
    text-align: center;
    padding: 100px 20px;
    height: 100vh; 
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  box-sizing: border-box;

  }
  
  .hero-content {
    max-width: 600px;
    margin: 0 auto;
  }
  
  .hero h1 {
    font-size: 3rem;
    margin-bottom: 20px;
  }
  
  .hero p {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }
  
  .btn-primary {
    cursor: pointer;
    background-color: #ffb6c1;
    color: white;
    border: none;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 5px;
  }
  
  .btn-primary:hover {
    background-color: #fc9090;
  }

  </style>
  