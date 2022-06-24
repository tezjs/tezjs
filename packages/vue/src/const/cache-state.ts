import { VNode } from "vue";
import { getUrl } from "../funcs/payload/get-url";

export const cacheState:
{
    layoutVNode:{[key:string]:VNode};
    pageVnodes:{[key:string]:{[key:string]:VNode}};
    getVNode(id:string):VNode;
    cacheVNode(id:string,vNode:VNode):VNode;
} = new (class {
    layoutVNode:{[key:string]:VNode}
    pageVnodes:{[key:string]:{[key:string]:VNode}}
    constructor(){
        this.layoutVNode = {};
        this.pageVnodes = {};
    }

    cacheVNode(id:string,vNode:VNode){
        let url = getUrl();
        if(!this.pageVnodes[url])
            this.pageVnodes[url] = {};
        this.pageVnodes[url][id] = vNode
        return vNode;
    }
    getVNode(id:string){
        let url = getUrl();
        if(!this.pageVnodes[url]) return;
        return this.pageVnodes[url][id];
    }
    
})();