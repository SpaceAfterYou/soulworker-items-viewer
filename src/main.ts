import { createApp } from 'vue';
import app from './app.vue';
import store from './store';

createApp(app).use(store).mount('#app');
