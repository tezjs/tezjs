import { createTezApp } from '@tezjs/vue'
createTezApp({
        components:import.meta.glob('./components/**/*.vue')
})
