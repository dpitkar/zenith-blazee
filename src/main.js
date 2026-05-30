import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import AOS from 'aos'
import App from './App.vue'
import router from './router'
import './assets/css/main.css'

AOS.init({
  duration: 700,
  easing: 'ease-out-cubic',
  once: true,
  offset: 60
})

const app = createApp(App)
const head = createHead()

app.use(router)
app.use(head)
app.mount('#app')
