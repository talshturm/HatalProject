<template>
  <div class="product-card">
    <hr class="separator">
    <div class="product-info">
      <img :src="product.image" :alt="product.name" class="product-image">
      <div class="product-details">
        <h3 class="product-name">{{ product.name }}</h3>
        <div class="product-description">{{ product.description }}</div>
      </div>
      <div class="product-price-trash">
      <div class="product-price">₪ {{ product.price }}</div>
      <button @click="removeProductFromCart(product.id)" class="delete-button">
        <i class="bi bi-trash"></i>
      </button>
    </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Swal from 'sweetalert2';

export default {
  name: 'cartProduct',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions(['removeFromCart']),
    removeProductFromCart(productId) {
      this.removeFromCart(productId);
      Swal.fire({
        position: 'bottom-left',
        icon: 'success',
        title: 'Product removed from cart',
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
        }});
    }
  }
}
</script>

<style scoped>
.product-card {
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 100%;
  max-width: 800px;
  margin: 0 auto 20px;
}

.product-name {
  font-size: 1.4rem;
  color: #333;
  margin-bottom: 10px;
}

.product-info {
  display: flex;
  width: 100%;
  margin-bottom: 20px;
  align-items: start;
}

.product-details {
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: 20px;
  margin-right: 40px;
}

.product-description {
  font-size: 1.2rem;
  color: #666;
  margin: 10px 0;
}

.product-price-trash {
  display: flex;
  align-items: center;
}

.product-price {
  font-size: 1.4rem;
  color: #333;
  font-weight: bold;
  margin-right: 20px; 
}

.product-image {
  width: 150px;
  height: auto;
  border: 1px solid #ddd;
}

.delete-button {
  background: none;
  border: none;
  color: #333;
  font-size: 1.5rem;
  cursor: pointer;
}

.separator {
  width: 100%;
  border-top: 1px solid dimgray;
}
</style>
