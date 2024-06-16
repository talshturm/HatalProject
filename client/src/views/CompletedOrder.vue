<template>
    <div class="completed-order">
        <header class="page-header">
      <h1 class="page-title">Order Placed!</h1>
    </header>
    <div class="content">
<h3>Thank you for shopping with us</h3>
<div>Your order has been placed and will soon be on its way to you</div>
    </div>
    <br/><br/>
    <h4>order details:</h4>
    <div class="products-table-container">
    <table class="products-table">
        <thead>
              <tr>
                <th class="product">product</th>
                <th class="price">price</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in products" :key="product.id">
            <td class="name">{{ product.name }}</td>
            <td class="price">{{ product.price }} ₪</td>
        </tr>
        <tr>
            <td class="total">Total price</td>
            <td class="total-price">{{  totalPrice }} ₪</td>
        </tr>
            </tbody>
        
    </table>
    </div>
    <button class="home-button" @click="toHome">Back to home page</button>
</div>
</template>
<script>
import api from '../services/orders.js';
import router from '../router/index.js';

export default {
data() {
    return {
        products: [],
        totalPrice:'',
    };
},
created() {
    this.fetchProducts()
},
methods: {
    toHome() {
      router.push('/');
    },
    async fetchProducts() {
      try {
        const orderId = this.$route.params.id;
        const response = await api.getOrder(orderId);
        this.products = response.data.products;
        this.totalPrice = response.data.totalPrice;
      } catch (error) {
        console.error(error); 
      }
    }
}
}
</script>


<style scoped>
.completed-order {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.content {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.products-table-container {
  width: 40%;
  margin: 0 auto;
}

.products-table {
  width: 100%;
  border-collapse: collapse;
}

.products-table th {
    border-bottom: 2px solid rgb(206, 206, 206);
    padding: 10px;
    border-top: none;
  }

  .page-header {
    padding-bottom: 0;
  }

.name {
    text-align: left;
    padding: 10px;
    border-top: 1px solid #ccc;
}
.price {
    text-align: right;
    border-top: 1px solid #ccc;
  padding: 10px;
}

.total {
    border-top: 1px solid black;
    text-align: left;
    padding: 10px;
    font-weight: bold;
}

.total-price {
    text-align: right;
    font-weight: bold;
    padding: 10px;
    border-top: 1px solid black;
}

.home-button {
  display: block;
  width: 15%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #f8dede; 
  color: #333; 
  font-size: 0.9rem;
  cursor: pointer;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  margin-bottom: 40px;
}

.home-button:hover {
  background-color: #ffb6c1;  
}
</style>