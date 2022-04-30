import { tezRouter} from "@tezjs/vue"
import Index from './pages/index.vue';
import CustomPage from './pages/custom-page.vue';
export default tezRouter(Index,{
    routerOptions:{
        routes:[{ path: '/custom', component: CustomPage }]
    }
}); 