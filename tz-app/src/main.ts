import { createApp } from 'vue'
import App from './App.vue'
import {tez} from '@tezjs/vue'
import router from './router'
createApp(App).
        use(tez.components(import.meta.glob('./components/*.vue'))).
                use(router).mount('#app')
