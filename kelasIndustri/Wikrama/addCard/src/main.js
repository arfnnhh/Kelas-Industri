import './index.css'
import { createApp } from 'vue'
import App from './App.vue'
import Btn from '@/components/Button.vue'

const app = createApp(App);

app.component('myBtn', Btn);
app.mount('#app');
