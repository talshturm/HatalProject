import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
    products: [],
    isAuthenticated: false,
    connectedUser: null,
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
    },
    login(state, user) {
      state.connectedUser = user;
      state.isAuthenticated = true;
    },
    logout(state) {
      state.connectedUser = null;
      state.isAuthenticated = false;
    },
  },
  actions: {
    addToCart({ commit }, product) {
      commit('addToCart', product);
    },
    removeFromCart({ commit }, productId) {
      commit('removeFromCart', productId);
    },
    clearCart({ commit }) {
      commit('clearCart');
    },
    login({ commit }, user) {
      commit('login', user);
    },
    logout({ commit }) {
      commit('logout');
    },
  },
  getters: {
    cartProducts(state) {
      return state.cart;
    },
    cartItemCount: (state) => {
      return state.cart.length;
    },
    totalPrice: (state) => {
      return state.cart.reduce((sum, product) => sum + product.price, 0);
    },
    productsIds: (state) => {
      return state.cart.map(product => product.id);
    }
  }
});
