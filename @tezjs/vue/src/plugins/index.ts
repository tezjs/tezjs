import TezSlot from "../components/tez-slot"
import TezLazy from "../components/tez-lazy"
import { componentState } from '../const/component-state';
import TzTickedMixin from '../mixins/tz-ticked.mixin'
import store from '../store';
import {overrideImageSourceProp} from '../funcs/override-image-source'
overrideImageSourceProp();
export const tez:
{
    components:(components:Record<string, () => Promise<{
        [key: string]: any;
      }>>)=> any 
  } = new (class {
  components(components:Record<string, () => Promise<{
    [key: string]: any;
  }>>){
    componentState.componentPath(components)
    return {
      install (Vue:any) {
        Vue.component("TezSlot", TezSlot);
        Vue.component("TezLazy", TezLazy);
        Vue.mixin(TzTickedMixin)
        Vue.use(store)
      }
    }
  }
})
