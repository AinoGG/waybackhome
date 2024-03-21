import './assets/main.css'
import './assets/CSS/buttons.scss'
import './assets/CSS/margins.scss'
import './assets/CSS/utility.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
