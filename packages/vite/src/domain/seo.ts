import { readFileSync, getPath } from "@tezjs/common"
import { TezSeo } from "@tezjs/types";
import { PROPERTY } from "../../../payload/src/const/app.const";
import { NAME } from "../const/core.const";
import { HtmlElement } from "./html-element";

export class Seo extends HtmlElement {
    seo: TezSeo;
    constructor(route: { [key: string]: any }) {
        super();
        this.seo = readFileSync(getPath([this.commonPath.payloadFolderPath, route.path, "tags.json"])) as TezSeo;
    }

    addTitle() {
        if (this.seo && this.seo.title)
            this.addElement(`<title>${this.seo.title}</title>`)
    }

    addCanonical() {
        if (this.seo && this.seo.canonical)
            this.addElement(`<link data-head="tezjs" rel="canonical" href="${this.seo.canonical}"></link>`)
    }

    setMetaTags(){
        if(this.seo && this.seo.metaTag){
            this.addMetaTags(NAME);
            this.addMetaTags(PROPERTY);
        }
    }

    addMetaTags(type:string)
    {
        if(this.seo.metaTag[type]){
            Object.keys(this.seo.metaTag[type]).forEach(item=>{
                for(let key of item)
                    this.addMeta(type,key,item[key])
            })
        }
    }

    addMeta(type:string,key:string,content:string){
        this.addElement(`<meta data-head="tezjs" ${type}="${key}" content="${content}">`)
    }

    addPageSchema(){
        if(this.seo.linkingData)
            this.addElement(`<script type="application/ld+json">${this.seo.linkingData}</script>`)
    }

    addPreload(path:string){
        this.addElement(`<link data-head="tezjs-preload" rel="preload" as="fetch" crossorigin href="${path}">`)
    }
}