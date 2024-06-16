<template>
    <div class="profile-page">
      <header class="page-header">
        <h1 class="page-title">My Profile</h1>
        <h2 class="subtitle">orders</h2>
      </header>
      <div class="content">
        <userInfo :user="connectedUser"/>
        <div class="orders-table">
          <table class="table">
            <thead>
              <tr>
                <th>order</th>
                <th>date</th>
                <th>status</th>
                <th>total price</th>
              </tr>
            </thead>
            <tbody>
              <order v-for="order in orders" :key="order.id" :order="order" />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Order from '../components/order.vue'; 
  import { mapState } from 'vuex';
  import api from '../services/users'
  import UserInfo from '../components/userInfo.vue'; 
  
  export default {
    name: 'Profile',
    components: {
      Order,
      UserInfo
    },
    data() {
      return {
        orders: [],
      }
    },
    computed: {
        ...mapState(['connectedUser'])
    },
    created() {
      this.fetchOrders();
    },
    methods: {
      async fetchOrders() {
        try {
            const response = await api.getUserOrders(this.connectedUser.id);
            this.orders = response.data;
        } catch (error) {
          console.error(error); 
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .profile-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 50px;
    padding-left: 50px;
  }
  
  .page-header {
    text-align: center;
  }
  
  .page-title {
  font-size: 3rem;
  color: #333;
  font-family: 'Pacifico', cursive;
  letter-spacing: 1px;
  margin-bottom: 20px;
}
  
  .subtitle {
    font-size: 1.3rem;
    color: #666;
  }
  
  .content {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  
  .orders-table {
    flex: 2;
    margin-right: 20px;
  }
  
  .table {
    width: 100%;
    border-collapse: collapse;
  }
  
  .table th, .table td {
    padding: 10px;
    border: 0;
  }

  .table th {
    border-bottom: 2px solid rgb(206, 206, 206);
  }
  </style>
  