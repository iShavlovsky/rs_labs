import createRouter from '@router/index'


import { createApp } from 'vue'
import './main.scss'
import App from './App.vue'


const router = createRouter();
const app = createApp(App)
app.use(router);
app.mount('#app')
