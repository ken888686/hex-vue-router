import { createApp } from 'vue';
import VueLoading from 'vue-loading-overlay';
import VueCookies from 'vue3-cookies';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/scss/all.scss';
import 'bootstrap';
import 'vue-loading-overlay/dist/vue-loading.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

createApp(App)
  .use(VueAxios, axios)
  .use(VueCookies, {
    expireTimes: '30d',
  })
  .use(store)
  .use(router)
  .use(VueLoading)
  .mount('#app');
