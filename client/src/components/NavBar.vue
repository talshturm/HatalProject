<template>
  <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #f8dede;">
    <div class="container">
      <router-link class="brand-picture" to="/">
        <img src='../../public/foxIcon.png' width="50">
      </router-link>
      
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <router-link class="nav-link logo" to="/">STZ</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/products" style="color: #555;">Products</router-link>
          </li>
        </ul>
        <div class="icons">
          <router-link class="nav-link cart" to="/cart" style="color: #555;">
            <i class="bi bi-cart"></i>
            <span class="badge" v-if="cartItemCount">{{ cartItemCount }}</span>
          </router-link>
          <router-link v-if="connectedUser" class="nav-link cart" to="/profile" style="color: #555;"><i class="bi bi-person"></i></router-link>
          <button v-else class="nav-link" @click="emitOpenLoginModal" style="color: #555;">log in</button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'Navbar',
  methods: {
    emitOpenLoginModal() {
      this.$emit('open-login-modal');
    }
  },
  computed: {
    ...mapState(['connectedUser']),
    ...mapGetters(['cartItemCount']),
  },
}
</script>

<style scoped>
.icons{
  display: flex;
  flex-direction: row;
  width: 7%;
  justify-content: space-between;
}

.brand-picture {
  padding-right: 0;
  padding-bottom: 5px;
  padding-top: 5px;
}

.logo {
  color: black; 
  margin-right: 15px;
}

.cart{
  font-size: 25px;
  position: relative;
}

.badge {
  position: absolute;
  top: -8px;
  right: -11px;
  background-color: #fe99a8;
  color: white;
  border-radius: 50%;
  padding: 3.5px 6px;
  font-size: 12px;
}

.navbar {
  width: 100%;
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
}
</style>
