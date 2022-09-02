import { TezPage } from '../models/tez-page';
import { setMetaInfo } from '../funcs/set-meta-tags';
import { DefineComponent } from "vue";
import { PayloadConfig } from '../models/payload-config';
import { getUrl } from '../funcs/payload/get-url';
import { activePageState } from './active-page-state';
import { isTitleElementExist } from '../funcs/is-title-element-exist';

export const tezPages:
{
    registerPage(page:TezPage):void;
    components:{[key:string]:DefineComponent};
    masterPages:{[key:string]:DefineComponent};
    getPayload(to?:string):any;
    refreshRoute(url:string);
    isExits(url:string):boolean;
    setUrlReference(url:string,referenceStateUrl:string):void;
} = new (class {
    components:{[key:string]:DefineComponent} = {};
    masterPages:{[key:string]:DefineComponent} = {};
    pages:{[key:string]:PayloadConfig} = {};
    urlReference:{[key:string]:string} = {};
    isInitializationMode:boolean = true;
    setComponents(components:{[key:string]:any}){
        Object.keys(components).forEach(key=>{
            if(!this.components[key])
                this.components[key] = components[key];
        })
    }

    setMasterPage(masterPage:{[key:string]:any}){
        if(masterPage)
            Object.keys(masterPage).forEach(key=>{
                if(!this.masterPages[key])
                    this.masterPages[key] = masterPage[key];
            })
    }

    setUrlReference(url:string,referenceStateUrl:string){
        this.urlReference[url] = referenceStateUrl;
    }

    getUrlReference(url:string){
        return this.urlReference[url];
    }

    setPage(page:TezPage){
        if(page.payload){
            let url = page.payload.url || getUrl();
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
        
        if(this.isInitializationMode){
                this.isInitializationMode = false;
                this.refreshRoute(url)
            }
        }

        if(!isTitleElementExist() && page.payload && page.payload.isPage && page.payload.tags)
            setMetaInfo(page.payload.tags)
    }
    refreshRoute(url:string){
        let urlReference = this.getUrlReference(url) || url;
        let currentPage = this.pages[urlReference];
                activePageState.setActivePage({
                    layoutName:currentPage.layoutName,
                    slots:currentPage.slots,
                    masterPageSlots:currentPage.masterPageSlots,
                    url:currentPage.url,
                    postScript:currentPage.postScript
                })
    }
    getPayload(to?:string){
        let url = to || getUrl()
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