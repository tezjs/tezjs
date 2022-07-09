import TezIndex from "../components/tez-index"
import TezSlot from "../components/tez-slot"
import TezLazy from "../components/tez-lazy"
import TezPage from "../components/tez-page"
import TezLink from "../components/tez-link"
import TezIterator from "../components/tez-iterator"
import { componentState } from '../const/component-state';
import TzTickedMixin from '../mixins/tz-ticked.mixin'
import {overrideImageSourceProp} from '../funcs/override-image-source'
import { TezAppOptions } from "../models/tez-app-options";
import { TEZ_SRC_DIRECTIVE } from "../directives/tez-src";
overrideImageSourceProp();
export const tez:
{
    register:(tezAppOptions:TezAppOptions)=> any 
} = new (class {
    register(tezAppOptions:TezAppOptions){
      
    return {
      install (Vue:any) {
        if(tezAppOptions.useVue)
          tezAppOptions.useVue(Vue);
        componentState.defineGlobalProps(Vue);
        Vue.component("TezIndex", TezIndex);
        Vue.component("TezSlot", TezSlot);
        Vue.component("TezLazy", TezLazy);
        Vue.component("TezPage", TezPage);
        Vue.component("TezLink", TezLink);
        Vue.component("TezIterator", TezIterator);
        Vue.directive("tez-src",TEZ_SRC_DIRECTIVE);
        Vue.mixin(TzTickedMixin)
      }
    }
  }
})
