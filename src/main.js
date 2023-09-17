import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './managers/storemanager/store';
import axios from './managers/axiosmanager/axiosplugin'; // Importa el plugin de Axios

createApp(App)
.use(store)
.use(axios)
.mount('#app')
