<template>
    <div class="product-details">
        <div class="product-image">
      <img :src="`/${product.image}`" :alt="product.name" class="product-image">
    </div>
      <div>
      <div class="product-info">
        <h1 class="product-name">{{ product.name }}</h1>
        <p class="product-description">{{ product.description }}</p>
        <p class="product-price">{{ product.price }} ₪</p>
      <button class="add-to-cart-button" @click="addCart(product)">Add to Cart</button>
    </div>
    </div>
    </div>
  </template>
    
    
    <script>
    import { mapActions, mapGetters } from 'vuex';
    import Swal from 'sweetalert2';
    import api from '../services/products.js';
    
    export default {
      name: 'product',
      data() {
      return {
        product: {},
      };
    },
      computed: {
      ...mapGetters(['cartProducts']),
    },
    created() {
      this.fetchProduct();
    },
    methods: {
      ...mapActions(['addToCart']),
      async fetchProduct() {
        try {
            const productId = this.$route.params.id;
            const response = await api.getProduct(productId);
            this.product = response.data;
        } catch (error) {
          console.error(error); 
        }
      },
      addCart(product) {
        const existingProduct = this.cartProducts.find(item => item.id === product.id);
        if (!existingProduct) {
          this.addToCart(product);
          Swal.fire({
          position: 'bottom-left',
          icon: 'success',
          title: 'Product added to cart',
          showConfirmButton: false,
          timer: 1500,
          toast: true,
          showClass: {
              popup: ''
            },
            hideClass: {
              popup: ''
            },
          customClass: {
            container: 'swal-custom-container',
          }})
        } else {
          Swal.fire({
            position: 'bottom-left',
            icon: 'warning',
            title: 'Product is already in the cart',
            showConfirmButton: false,
            timer: 1500,
            toast: true,
            showClass: {
              popup: ''
            },
            hideClass: {
              popup: ''
            },
          customClass: {
            container: 'swal-custom-container',
          }
          });
        }
      }
    }
    }
    </script>
    
    <style scoped>
.product-details {
  display: flex;
  align-items: stretch;
  justify-content: center;
  padding: 20px;
}

.product-image img {
  max-width: 500px;
  max-height: 500px;
  margin-right: 40px;
}

.product-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.product-name {
  font-weight: bold;
  font-size: 2.2em;
  margin-bottom: 20px;
  width: 350px;
}

.product-description {
  font-size: 1.1em;
  margin-bottom: 30px;
}

.product-price {
  font-size: 1.2em;
  color: black;
  margin-bottom: 50px;
}
  
  .add-to-cart-button {
    align-self: flex-start;
  width: 100%;
  padding: 10px 15px;
  font-size: 1.2em;
  border: none;
  border-radius: 4px;
  background-color: #f8dede;
  color: #333;
  cursor: pointer;
  margin-top: auto;
  }
  
  .add-to-cart-button:hover {
    background-color: #ffb6c1;  
  }
  
  </style>