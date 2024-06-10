<template>
  <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #f8dede;">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img src='../assets/foxIcon.png' width="50">
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/" style="color: #555;">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/products" style="color: #555;">Products</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/cart" style="color: #555;">Cart</router-link>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-secondary" type="submit">Search</button>
        </form>
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
/* Custom styling for the navbar */
.navbar-toggler-icon {
  background-color: #555;
}
</style>
