<template>
  <div id="app">
    <Navbar @open-login-modal="openLoginModal" />
    <LoginModal v-if="showLoginModal" @close="showLoginModal = false" />
    <router-view @open-login-modal="openLoginModal"></router-view>
  </div>
</template>

<script>
import Navbar from './components/NavBar';
import LoginModal from './components/loginModal.vue';

  export default {
  name: 'App',
  components: {
    Navbar,
    LoginModal
  },
  data() {
    return {
      showLoginModal: false
    };
  },
  methods: {
    openLoginModal() {
      this.showLoginModal = true;
    }
  }
}
</script>

<style>

</style>
