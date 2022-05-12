import { createApp } from 'vue'
import App from './app.vue'
import {tez} from '@tezjs/vue'
createApp(App).
        use(tez.register({})).mount('#app')
