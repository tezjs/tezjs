import TezIndex from "../components/tez-index"
import TezSlot from "../components/tez-slot"
import TezLazy from "../components/tez-lazy"
import TezPage from "../components/tez-page"
import { componentState } from '../const/component-state';
import TzTickedMixin from '../mixins/tz-ticked.mixin'
import { createTezStore } from '../store';
import {overrideImageSourceProp} from '../funcs/override-image-source'
import { tezRouter } from "../funcs/tez-router";
import { TezAppOptions } from "../models/tez-app-options";
import { TEZ_SRC_DIRECTIVE } from "../directives/tez-src";
overrideImageSourceProp();
export const tez:
{
    register:(tezAppOptions:TezAppOptions)=> any 
} = new (class {
    register(tezAppOptions:TezAppOptions){
      componentState.tezAppOptions = tezAppOptions;
    return {
      install (Vue:any) {
        if(tezAppOptions.useVue)
          tezAppOptions.useVue(Vue);
        componentState.defineGlobalProps(Vue);
        Vue.component("TezIndex", TezIndex);
        Vue.component("TezSlot", TezSlot);
        Vue.component("TezLazy", TezLazy);
        Vue.component("TezPage", TezPage);
        Vue.directive("tez-src",TEZ_SRC_DIRECTIVE);
        Vue.mixin(TzTickedMixin)
        Vue.use(createTezStore(tezAppOptions.store))
        let defaultRouteComponent = TezIndex;
        Vue.use(tezRouter(defaultRouteComponent,tezAppOptions))
      }
    }
  }
})
