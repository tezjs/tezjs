import { createTezApp } from '@tezjs/vue'
console.log(import.meta.glob('./layouts/**/*.layout.vue'))
createTezApp({
        components:import.meta.glob('./components/**/*.vue'),
        layouts:import.meta.glob('./layouts/**/*.layout.vue')
})
