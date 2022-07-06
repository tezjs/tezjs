import { TezPage } from '../models/tez-page';
import { setMetaInfo } from '../funcs/set-meta-tags';
import { DefineComponent } from "vue";
import { PayloadConfig } from '../models/payload-config';
import { getUrl } from '../funcs/payload/get-url';
import { activePageState } from './active-page-state';

export const tezPages:
{
    registerPage(page:TezPage):void;
    components:{[key:string]:DefineComponent};
    masterPages:{[key:string]:DefineComponent};
    getPayload():any;
    refreshRoute(url:string);
    isExits(url:string):boolean;
} = new (class {
    components:{[key:string]:DefineComponent} = {};
    masterPages:{[key:string]:DefineComponent} = {};
    pages:{[key:string]:PayloadConfig} = {};
    isInitializationMode:boolean = true;
    setComponents(components:{[key:string]:any}){
        Object.keys(components).forEach(key=>{
            if(!this.components[key])
                this.components[key] = Object.freeze(components[key]);
        })
    }

    setMasterPage(masterPage:{[key:string]:any}){
        if(masterPage)
            Object.keys(masterPage).forEach(key=>{
                if(!this.masterPages[key])
                    this.masterPages[key] = Object.freeze(masterPage[key]);
            })
    }

    setPage(page:TezPage){
        if(page.payload){
            let url = page.payload.url;
            if(!this.pages[url])
                this.pages[url] = {...page.payload,...{postScript:page.postScript}};
        else{
            Object.keys(page.payload.slots).forEach(slotName=>{
                if(!this.pages[url].slots[slotName])
                    this.pages[url].slots[slotName]=[];
                if(this.pages[url].slots && this.pages[url].slots[slotName])
                    page.payload.slots[slotName].forEach(item=>{
                        let component = this.pages[url].slots[slotName].filter(t=>t.id === item.id)[0];
                        if(component)
                            component.data  = item.data;
                    })
            })
        }
        if(page.payload && page.payload.tags)
            setMetaInfo(page.payload.tags)
        
        if(this.isInitializationMode){
                this.isInitializationMode = false;
                this.refreshRoute(url)
            }
        }
        
    }
    refreshRoute(url:string){
        let currentPage = this.pages[url];
                activePageState.setActivePage({
                    layoutName:currentPage.layoutName,
                    slots:currentPage.slots,
                    masterPageSlots:currentPage.masterPageSlots,
                    url:currentPage.url,
                    postScript:currentPage.postScript
                })
    }
    getPayload(){
        let url = getUrl()
        return this.pages[url]
    }

    isExits(url?:string):boolean{
        let requestedUrl = getUrl(url);
        return this.pages[requestedUrl] !== undefined;
    }

    registerPage(page:TezPage){
        this.setComponents(page.components)
        this.setMasterPage(page.masterPage)
        this.setPage(page)
    }

})();