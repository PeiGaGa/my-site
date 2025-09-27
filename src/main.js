import { createApp } from 'vue'
import './style.css'
import './styles/responsive.css'
import './styles/rem-utilities.css'
import './styles/device-adaptation.css'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
