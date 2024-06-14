<template>
  <div id="app">
    <div class="content">
      <Navbar @open-login-modal="openLoginModal" />
      <LoginModal v-if="showLoginModal" @close="showLoginModal = false" />
      <router-view @open-login-modal="openLoginModal"></router-view>
    </div>
      <Contact />
  </div>
</template>

<script>
import Navbar from './components/NavBar';
import LoginModal from './components/loginModal.vue';
import Contact from './components/contact.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    LoginModal,
    Contact
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
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  padding-top: 70px;
}

.content {
  flex: 1; 
}
</style>
