<template>
    <div class="completed-order">
        <header class="page-header">
      <h1 class="page-title">Order Placed!</h1>
    </header>
    <div class="content">
<h3>Thank you for shopping with us</h3>
<div>Your order has been placed and will soon be on its way to you</div>
    </div>
    <br/>
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
            </tbody>
        
    </table>
    </div>
</div>
</template>
<script>
import api from '../services/orders.js'

export default {
data() {
    return {
        products: [],
    };
},
created() {
    this.fetchProducts()
},
methods: {
    async fetchProducts() {
      try {
        const orderId = this.$route.params.id;
        const response = await api.getOrder(orderId);
        this.products = response.data.products;
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

.products-table td {
  border-bottom: 1px solid #ccc;
  padding: 10px;
}

.products-table th {
    border-bottom: 2px solid rgb(206, 206, 206);
    padding: 10px;
  }

.name {
    text-align: left;
    padding: 10px;
}
.price {
    text-align: right;
}
</style>