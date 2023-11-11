import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router"
import App from './App.vue'
import './index.css'
import Home  from '@/pages/Home.vue'


const routes = [{
    path: '/home',
    name: 'Home',
    component: Home
}]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App).use(router).mount('#app')