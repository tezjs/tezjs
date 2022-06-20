import { TezPage } from '../models/tez-page';
import { setMetaInfo } from './set-meta-tags';
import { DefineComponent } from "vue";
import { PayloadConfig } from '../models/payload-config';

export const tezPages:
{
    registerPage(page:TezPage):void;
} = new (class {
    components:{[key:string]:DefineComponent};
    masterPages:{[key:string]:DefineComponent};
    pages:{[key:string]:PayloadConfig}
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
            if(!this.pages[page.url])
            this.pages[page.url] = page.payload;
        else{
            Object.keys(page.payload.slots).forEach(slotName=>{
                if(!this.pages[page.url].slots[slotName])
                this.pages[page.url].slots[slotName]=[];
                if(this.pages[page.url].slots && this.pages[page.url].slots[slotName])
                    page.payload.slots[slotName].forEach(item=>this.pages[page.url].slots[slotName].push(item))
            })
        }
        if(page.payload && page.payload.tags)
            setMetaInfo(page.payload.tags)
        }
    }

    registerPage(page:TezPage){
        this.setComponents(page.components)
        this.setMasterPage(page.masterPage)
        this.setPage(page)
    }

})();




export function registerTezPage(page:TezPage){
    tezPages.registerPage(page)
}