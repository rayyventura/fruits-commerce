import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './styles/reset.css';
import './styles/style.scss';

createApp(App).use(store).use(router).mount('#app');
