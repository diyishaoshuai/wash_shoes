import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// elment-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// reset.css
import './assets/styles/reset.css'
import './assets/styles/normalize.css'

// Jquery
import 'jquery'


createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
