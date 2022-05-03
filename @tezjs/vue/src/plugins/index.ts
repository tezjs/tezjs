import TezIndex from "../components/tez-index"
import TezSlot from "../components/tez-slot"
import TezLazy from "../components/tez-lazy"
import { componentState } from '../const/component-state';
import TzTickedMixin from '../mixins/tz-ticked.mixin'
import store from '../store';
import {overrideImageSourceProp} from '../funcs/override-image-source'
import { TezRouterConfig } from "../models/tez-router-config";
import { tezRouter } from "../funcs/tez-router";
overrideImageSourceProp();
export const tez:
{
    register:(components:Record<string, () => Promise<{
        [key: string]: any;
      }>>,tezRouterConfig?:TezRouterConfig)=> any 
  } = new (class {
    register(components:Record<string, () => Promise<{
    [key: string]: any;
  }>>,tezRouterConfig?:TezRouterConfig){
    componentState.componentPath(components)
    return {
      install (Vue:any) {
        Vue.component("TezIndex", TezIndex);
        Vue.component("TezSlot", TezSlot);
        Vue.component("TezLazy", TezLazy);
        Vue.mixin(TzTickedMixin)
        Vue.use(store)
        let defaultRouteComponent = tezRouterConfig?.defaultRouteComponent || TezIndex;
        let routerOptions = tezRouterConfig?.options
        Vue.use(tezRouter(defaultRouteComponent,routerOptions))
      }
    }
  }
})
