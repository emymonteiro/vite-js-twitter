import { createApp } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faRetweet } from '@fortawesome/free-solid-svg-icons'
import router from './router/index.js'
import App from './App.vue'


library.add(faCoffee, faRetweet);

import './assets/css/tailwind.css'

createApp(App)
.use(router)
.component('fa', FontAwesomeIcon)
.mount('#app')
