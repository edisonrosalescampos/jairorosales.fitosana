import { createApp } from 'vue';
import store from './store';
import router from './router';
import App from './App.vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './style.css';

const app = createApp(App);
app.use(store);
app.use(router);
app.mount('#app');