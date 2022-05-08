import { createApp } from 'vue'
import App from './App.vue'
import {tez} from '@tezjs/vue'

createApp(App).
    use(tez.register(import.meta.glob('./components/*.vue'))).mount('#app')
