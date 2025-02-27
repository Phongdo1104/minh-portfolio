import './assets/app.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { MotionPlugin } from '@vueuse/motion'

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(MotionPlugin)

app.mount('#app')
