<template>
  <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #f8dede;">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <img src='../../public/foxIcon.png' width="50">
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
          <router-link class="nav-link cart" to="/cart" style="color: #555;"><i class="bi bi-cart"></i></router-link>
          <button class="nav-link login" @click="emitOpenLoginModal" style="color: #555;">log in</button>
        </div>
          <!-- <Router-link class="nav-link login" to="/profile" style="color: #555;"><i class="bi bi-person"></i></Router-link> -->
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    emitOpenLoginModal() {
      this.$emit('open-login-modal');
    }
  }
}
</script>

<style scoped>
.icons{
  display: flex;
  flex-direction: row;
  width: 7%;
  justify-content: space-between;
}

.cart{
  font-size: 25px;
}
</style>
