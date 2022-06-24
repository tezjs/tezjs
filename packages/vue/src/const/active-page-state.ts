import { reactive } from "vue";
import { PageState } from "../models/page-state";
import { createHooks, Hookable } from 'hookable'
export const activePageState:
{
    setActivePage(pageState:PageState):void;
    page:PageState;
    hooks:Hookable<any>;
} = new (class {
    hooks:Hookable<any>
    page:PageState= {url:'',layoutName:'',masterPageSlots:{},slots:{}};

    constructor(){
        this.hooks = createHooks();
    }
    
    setActivePage(pageState:PageState){
        this.page.slots =pageState.slots;
        this.page.masterPageSlots  = pageState.masterPageSlots ;
        this.page.layoutName = pageState.layoutName;
        this.page.url = pageState.url;
        this.page.layoutComponent = pageState.layoutComponent;
        this.hooks.callHook('tez:layoutNameChanged',this.page.layoutName)
        this.hooks.callHook('tez:slotsChanged',{slots:this.page.slots,masterPageSlots:this.page.masterPageSlots})
        this.hooks.callHook("tez:layoutComponentChanged",{component:this.page.layoutComponent})
    }
})();