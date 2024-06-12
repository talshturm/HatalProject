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
        <hr class="line">
        <div class="order-details">
          <div class="order-price">
          <p class="products-amount">Total products in cart: {{ cartItemCount }}</p>
          <h3 class="total-price">Total price: {{ totalPrice }} ₪</h3>
        </div>
        <button v-if="connectedUser" class="order-button" @click="createOrder">Checkout</button>
        <p v-else class="notConnected">To checkout, please log in</p>
        </div>
      </div>
      <p v-else class="empty-cart-message">Your cart is empty</p>
    </div> <br/><br/>
</div>
</template>
<script>
import { mapGetters, mapActions, mapState } from 'vuex';
import cartProduct from '../components/cartProduct.vue';
import api from '../services/orders.js';
import Swal from 'sweetalert2';
import router from '../router/index.js';

export default {
  name: 'Cart',
  components: {
   cartProduct
  },
  computed: {
    ...mapGetters(['cartProducts','totalPrice','cartItemCount','productsIds']),
    ...mapState(['connectedUser'])
  },
  methods: {
    ...mapActions(['clearCart']),
    async createOrder() {
      try{
      const order = {
        userId: this.connectedUser.id,
        productIds: this.productsIds,
        status: 'pending',
        orderDate: new Date(),
      };
      const response = await api.createOrder(order);
      if (response.status === 201) {
        this.clearCart();
          router.push('/completedOrder');
        } else {
          Swal.fire({
          position: 'bottom-left',
          icon: 'error',
          title: 'Failed creating order',
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
      })}
      } catch (error) {
        console.error('Error creating order:', error);
        Swal.fire({
          position: 'bottom-left',
          icon: 'error',
          title: 'An error occurred while creating the order. Please try again.',
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
      })
      }}
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

.total-price {
  font-size: 1.4rem;
  color: #333;
}

.products-amount {
  font-size: 1rem;
  color: #666;
}

.order-button {
  background-color: #ffb6c1;
  width: 25%;
  padding: 8px 16px;
    color: #333; 
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
.order-button:hover {
  background-color: #f8dede; 
  }

  .order-details {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .line {
  width: 100%;
  background-color: darkgray;
  height: 2px;
  border: none;
  color: darkgray;
  opacity: 100%;
}

  .notConnected {
    font-size: 1rem;
    color: #666;
    width: 20%;
  }
</style>