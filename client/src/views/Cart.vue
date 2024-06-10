<template>
    <div class="cart-container">
    <header class="page-header">
      <h1 class="page-title">my Cart</h1>
    </header>
    <div class="cart-products">
      <div v-if="cartProducts.length">
        <div class="product-card-wrapper" v-for="product in cartProducts" :key="product.id">
          <cartProduct :product="product" />
        </div>
      </div>
      <p v-else class="empty-cart-message">Your cart is empty</p>
    </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex';
import cartProduct from '../components/cartProduct.vue'

export default {
  name: 'Cart',
  components: {
   cartProduct
  },
  computed: {
    ...mapGetters(['cartProducts'])
  }
}
</script>

<style scoped>
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
.cart-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.cart-products {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.product-card-wrapper {
  width: 100%;
  max-width: 900px;
  margin-bottom: 20px;
}

.empty-cart-message {
  font-size: 1.2rem;
  color: #666;
}
</style>