import Vue from 'vue';
import App from './App.vue';
import router from './router/index'
import store from './store/index';
import 'bootstrap/dist/css/bootstrap.css';
import { IconsPlugin } from 'bootstrap-vue';
import 'bootstrap-icons/font/bootstrap-icons.css';

Vue.use(IconsPlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
