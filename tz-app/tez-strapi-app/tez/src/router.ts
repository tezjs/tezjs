import { tezRouter} from "@tezjs/vue"
import Index from './pages/index.vue';
import CustomPage from './pages/custom-page.vue';
export default tezRouter(Index,{
    routerOptions:{
        routes:[{ path: '/custom', component: CustomPage,seo:{
            "title":"Custom Page Blog","canonical":"http://localhost:3000/","metaTag":{"name":{"description":"My Personal Strapi Blog"}}} 
    }]
    }
}); 