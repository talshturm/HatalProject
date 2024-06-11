import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import ProductList from '@/views/ProductList.vue';
import ProductDetail from '@/views/ProductDetail.vue';
import Cart from '@/views/Cart.vue';
import SignUp from '@/views/SignUp.vue';
import Profile from '@/views/Profile.vue';

Vue.use(Router);

const routes = [
  { path: '/', component: Home },
  { path: '/products', component: ProductList },
  { path: '/products/:id', component: ProductDetail },
  { path: '/cart', component: Cart },
  { path: '/signup', component: SignUp },
  { path: '/profile', component: Profile },
];

export default new Router({
  mode: 'history',
  routes,
});