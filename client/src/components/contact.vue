<template>
  <footer class="page-footer">
    <router-link class="footer-link" to="/feedback">Contact us</router-link>
  </footer>
  </template>
  
  <script>
  export default {
    name: 'Contact'
  };
  </script>
  
  <style scoped>
.page-footer {
  padding: 20px;
  text-align: center;
  background-color: #f1f1f1;
  width: 100%;
  bottom: 0; 
  left: 0;
}

.footer-link {
  font-size: 1rem;
  color: #333;
  text-decoration: none;
}
  </style>
  