import { createApp } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import router from './router/index.js'
import App from './App.vue'

library.add(fas);

import './assets/css/tailwind.css'

createApp(App)
.use(router)
.component('fa', FontAwesomeIcon)
.mount('#app')
