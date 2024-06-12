<template>
    <div>
    <header class="page-header">
      <h1 class="page-title">Jewelry</h1>
    </header>
    <div class="product-list">
      <product v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script>
import api from '../services/products';
import product from '../components/product';

  export default {
    name: 'ProductList',
    data() {
      return {
        products: [],
      };
    },
    components: {
        product 
    },
    created() {
      this.fetchProducts();
    },
    methods: {
      async fetchProducts() {
        try {
            const response = await api.getProducts();
            this.products = response.data;
        } catch (error) {
          console.error(error); 
        }
      }
    }
  }
  </script>
  <style>
.page-header {
  padding: 20px;
  text-align: center;
}

.page-title {
  font-size: 3rem;
  color: #333;
  font-family: 'Pacifico', cursive;
  letter-spacing: 1px;
  margin-bottom: 40px;
}

.product-list {
  display: flex;
  flex-wrap: wrap;
  margin-right: 40px;
  margin-left: 40px;
  margin-bottom: 60px;
  gap: 60px;
  padding: 0 10px;
  justify-content: flex-start;
}

.product {
  flex: 1 1 calc(33.333% - 20px);
  box-sizing: border-box; 
}

</style>