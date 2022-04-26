import { createApp } from 'vue'
import App from './App.vue'
import * as router from './router'
import * as plugin from "@yourname/yourlibrary"
import * as tez from "@tezjs/vue"
console.log(import.meta.glob('./components/*.vue'))
createApp(App).use(router).use(tez.TEZ_PLUGIN).mount('#app')
