import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
    products: [],
  },
  mutations: {
    addToCart(state, product) {
      state.cart.push(product);
    },
    removeFromCart(state, productId) {
      state.cart = state.cart.filter(product => product.id !== productId);
    },
    clearCart(state) {
      state.cart = [];
    }
  },
  actions: {
    addToCart({ commit }, product) {
      commit('addToCart', product);
    },
    clearCart({ commit }) {
      commit('clearCart');
    }
  },
  getters: {
    cartProducts(state) {
      return state.cart;
    },
    cartItemCount: (state) => {
      return state.cart.length;
    }
  }
});
