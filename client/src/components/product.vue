<template>
  <div class="product-card">
    <div>
    <img :src="product.image" :alt="product.name" class="product-image">
    <div class="product-details">
      <h3 class="product-name">{{ product.name }}</h3>
      <hr class="separator">
      <div class="product-price">{{ product.price }} ₪</div>
    </div>
  </div>
    <button class="add-to-cart-button" @click="addCart(product)">Add to Cart</button>
  </div>
</template>
  
  
  <script>
  import { mapActions, mapGetters } from 'vuex';
  import Swal from 'sweetalert2'
  
  export default {
    name: 'product',
    props: {
      product: {
        type: Object,
        required: true
      }
    },
    computed: {
    ...mapGetters(['cartProducts'])
  },
  methods: {
    ...mapActions(['addToCart']),
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
.product-card {
  border: 1px solid #f8dede;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 250px; 
  margin: 0 auto;
  display: flex; 
  flex-direction: column;
  justify-content: space-between;
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
  width: 90%;
  padding: 8px;
  border: none;
  border-radius: 4px;
  background-color: #f8dede; 
  color: #333; 
  font-size: 0.9rem;
  cursor: pointer;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
}

.add-to-cart-button:hover {
  background-color: #ffb6c1;  
}

.separator {
  border-top: 1.5px solid dimgray;
  margin-top: 15px;
  width: 50%;
  margin-left: 24%;
}

</style>