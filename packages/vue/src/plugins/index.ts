import TezIndex from "../components/tez-index"
import TezSlot from "../components/tez-slot"
import TezLazy from "../components/tez-lazy"
import { componentState } from '../const/component-state';
import TzTickedMixin from '../mixins/tz-ticked.mixin'
import { createTezStore } from '../store';
import {overrideImageSourceProp} from '../funcs/override-image-source'
import { tezRouter } from "../funcs/tez-router";
import { TezAppOptions } from "../models/tez-app-options";
overrideImageSourceProp();
export const tez:
{
    register:(tezAppOptions:TezAppOptions)=> any 
  } = new (class {
    register(tezAppOptions:TezAppOptions){
    componentState.componentPath(tezAppOptions.components)
    if(tezAppOptions.layouts)
      componentState.layoutPath(tezAppOptions.layouts)
    return {
      install (Vue:any) {
        Vue.component("TezIndex", TezIndex);
        Vue.component("TezSlot", TezSlot);
        Vue.component("TezLazy", TezLazy);
        Vue.mixin(TzTickedMixin)
        Vue.use(createTezStore(tezAppOptions.store))
        let defaultRouteComponent = TezIndex;
        Vue.use(tezRouter(defaultRouteComponent,tezAppOptions.routerOptions))
      }
    }
  }
})
