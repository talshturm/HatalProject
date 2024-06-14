/* eslint-disable */
import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import ProductList from '@/views/ProductList.vue';
import ProductDetail from '@/views/ProductDetail.vue';
import Cart from '@/views/Cart.vue';
import SignUp from '@/views/SignUp.vue';
import Profile from '@/views/Profile.vue';
import CompletedOrder from '@/views/CompletedOrder.vue';
import Feedback from '@/views/Feedback.vue';

Vue.use(Router);

const routes = [
  { path: '/', component: Home },
  { path: '/products', component: ProductList },
  { path: '/products/:id', name: 'ProductDetails', component: ProductDetail },
  { path: '/cart', component: Cart },
  { path: '/signup', component: SignUp },
  { path: '/profile', component: Profile },
  { path: '/completedOrder/:id', name: 'completedOrder', component: CompletedOrder},
  { path: '/feedback', component: Feedback}
];

export default new Router({
  mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

/* eslint-enable */