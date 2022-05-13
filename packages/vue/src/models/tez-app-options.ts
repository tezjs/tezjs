import { RouterOptions } from "vue-router";
import { ModuleTree } from "vuex";

export interface TezAppOptions {
    
    components:Record<string, () => Promise<{
        [key: string]: any;
      }>>;

    layouts?:Record<string, () => Promise<{
        [key: string]: any;
      }>>;
    
    routerOptions?:RouterOptions;

    store?:ModuleTree<unknown>;

}