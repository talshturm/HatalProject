<template>
  <div class="product-card">
    <img :src="product.image" :alt="product.name" class="product-image">
    <div class="product-details">
      <h3 class="product-name">{{ product.name }}</h3>
      <div class="product-price">{{ product.price }}₪</div>
      <button class="add-to-cart-button" @click="addCart(product)">Add to Cart</button>
    </div>
  </div>
</template>
  
  
  <script>
  import { mapActions } from 'vuex';

  export default {
    name: 'product',
    props: {
      product: {
        type: Object,
        required: true
      }
    },
    methods: {
    ...mapActions(['addToCart']),
    addCart(product) {
      this.addToCart(product);
      alert('Product added to cart!'); //use alertify
    }
  }
  }
  </script>
  
  <style scoped>
.product-card {
  border: 1px solid #f8dede;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 250px; 
  margin: 0 auto;
}

.product-image {
  width: 100%;
  height: auto;
  border-bottom: 1px solid #f8dede; 
}

.product-details {
  padding: 15px;
  text-align: center;
}

.product-name {
  font-size: 1rem; 
  margin-bottom: 8px; 
  color: #333;
}

.product-price {
  font-size: 1rem; 
}

.add-to-cart-button {
  display: block;
  width: 100%;
  padding: 8px;
  margin-top: 10px; 
  border: none;
  border-radius: 4px;
  background-color: #f8dede; 
  color: #333; 
  font-size: 0.9rem;
  cursor: pointer;
}

.add-to-cart-button:hover {
  background-color: #ffb6c1; 
}
</style>