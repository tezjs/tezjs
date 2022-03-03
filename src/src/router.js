import { tezRouter } from "@tezjs/vue-router"

import Index from './pages/index.vue';
console.log(import.meta.env.SSR)


export default tezRouter(Index,{ssr:import.meta.env.SSR}); 