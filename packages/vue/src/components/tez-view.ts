import { defineAsyncComponent, DefineComponent, defineComponent ,h, KeepAlive, VNode } from "vue"
import { activePageState } from "../const/active-page-state";
import { cacheState } from "../const/cache-state";
import { tezPages } from "../const/tez-pages";
import TezIndex from './tez-index'
import TezPage from "./tez-page"
const CACHE_KEY_LAYOUT_TEZ_PAGE:string = "layout_tezpage";
export default defineComponent({
    data(){
        return {
            state:{},
            tezNode:h(TezIndex), 
            vNode:undefined,
            layoutName:undefined,
            layoutComponent:undefined
        }
    },
    mounted(){
      this.layoutName = activePageState.page.layoutName;
      this.layoutComponent = activePageState.page.layoutComponent;  
      this.subscribeHooks();
    },
    methods:{
        subscribeHooks(){
            activePageState.hooks.hook("tez:layoutNameChanged",(layoutName:string)=>{
                this.layoutName = layoutName;
            })
    
            activePageState.hooks.hook("tez:layoutComponentChanged",(component:DefineComponent)=>{
                this.layoutComponent = component;
            })
        }
    },
    render() {
        let vNode:VNode = undefined
        let layoutComponent:any = tezPages.masterPages[this.layoutName];
    
        if (typeof layoutComponent === "function") 
            tezPages.masterPages[this.layoutName] = layoutComponent = defineAsyncComponent(layoutComponent);
            
        if(!layoutComponent)
            cacheState.layoutVNode[CACHE_KEY_LAYOUT_TEZ_PAGE] = vNode = cacheState.layoutVNode[CACHE_KEY_LAYOUT_TEZ_PAGE]|| h(TezPage);
        else if(layoutComponent)
            cacheState.layoutVNode[this.layoutName] = vNode = cacheState.layoutVNode[this.layoutName] || h(layoutComponent);
        return h(h(KeepAlive,null,vNode));
    }
  })