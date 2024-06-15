<template>
    <div class="user-info">
    <div class="user-header">
        <div class="user-name">
          <h3>{{ user.username }} <span class="user-id">#{{ user.id }}</span></h3>
        </div>
      </div>
      <div class="user-details">
        <p><strong>First Name:</strong> {{ user.firstName }}</p><hr class="line">
        <p><strong>Last Name:</strong> {{ user.lastName }}</p><hr class="line">
        <p><strong>Email:</strong> {{ user.email }}</p><hr class="line">
        <p><strong>Address:</strong> {{ user.address }}</p><hr class="line">
        <button @click="handleLogout" class="logout">logout</button>
      </div>
    </div>
</template>
<script>
  import router from '../router/index.js';
  import { mapActions } from 'vuex';

  export default {
    name: 'UserInfo',
    props: {
    user: {
      type: Object,
      required: true
    }
  }, 
  methods: {
    ...mapActions(['logout']),
      handleLogout() {
        this.logout();
        router.push('/');
      }
  }
  };
  </script>
  <style>
  .user-profile-page {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

.user-info {
  width: 30%;
  text-align: left;
}

.user-header {
  display: flex;
  align-items: center;
}

.user-name {
  flex-grow: 1;
}

.user-name h3 {
  font-size: 1.3em;
  margin: 0;
}

.user-id {
  color: #888;
  font-size: 0.8em;
}

.user-details {
  margin-top: 20px;
}

.logout {
    background-color: white;
    border: 0;
    font-weight: bold;
    padding: 0;
    margin-bottom: 20px;
  }

.line{
    width: 60%;
  border-top: 1px solid dimgray;
}

</style>