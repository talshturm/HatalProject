<template>
  <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #f8dede;">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <img src='../assets/foxIcon.png' width="50">
      </router-link>
      
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/" style="color: #555;">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/products" style="color: #555;">Products</router-link>
          </li>
        </ul>
        <div class="icons">
          <router-link class="nav-link" to="/cart" style="color: #555;"><i class="bi bi-cart"></i></router-link>
          <Router-link class="nav-link login" to="/login" style="color: #555;"><i class="bi bi-person"></i></Router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
.icons{
  display: flex;
  flex-direction: row;
  width: 7%;
  justify-content: space-between;
  font-size: 25px;
}
</style>
