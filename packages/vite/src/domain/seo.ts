import { readFileSync, getPath } from "@tezjs/common"
import { TezSeo } from "@tezjs/types";
import { PROPERTY } from "../../../payload/src/const/app.const";
import { NAME } from "../const/core.const";
import { HtmlElement } from "./html-element";
import getUrl from '../functions/get-url'
import { Head } from "@tezjs/types";
export class Seo extends HtmlElement {
    seo: TezSeo;
    constructor(route: { [key: string]: any } | Head) {
        super();
        if((<{ [key: string]: any }>route).path)
            this.seo = readFileSync(getPath([this.commonPath.payloadPath,"payload", getUrl((<{ [key: string]: any }>route).path), "tags.json"])) as TezSeo;
        else
            this.seo = route as Head;
    }

    getElements(){
        this.addTitle();
        this.addCanonical();
        this.setMetaTags();
        this.addPageSchema();
        return `${this.preElementString}\n${this.postElementString}`;
    }

    addTitle() {
        if (this.seo && this.seo.title)
            this.addElement(`<title data-head="tezjs">${this.seo.title}</title>`,true)
    }

    addCanonical() {
        if (this.seo && this.seo.canonical)
            this.addElement(`<link data-head="tezjs" rel="canonical" href="${this.seo.canonical}"></link>`,false)
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
            Object.keys(this.seo.metaTag[type]).forEach(key=>{
                    this.addMeta(type,key,this.seo.metaTag[type][key])
            })
        }
    }

    addMeta(type:string,key:string,content:string){
        this.addElement(`<meta data-head="tezjs" ${type}="${key}" content="${content}">`,false)
    }

    addPageSchema(){
        if(this.seo && this.seo.linkingData){
            const splitLinkingData = this.seo.linkingData.split("--");
            splitLinkingData.forEach(data=>{
                this.addElement(`<script data-head="tezjs"  type="application/ld+json">${data.trim()}</script>`,false)
            })
        }
    }

    addPreload(path:string,as:string){
        this.addElement(`<link data-head="tezjs-preload" rel="preload" as="${as}" ${as === "script" ? "crossorigin":''}  href="/${path.replace(/\/\//g, "/")}">`,true)
    }
//

    addModulePreload(path:string){
        this.addElement(`<link data-head="tezjs-preload"  rel="modulepreload" href="/${path}">`,true)
    }

    addScript(path:string){
        this.addElement(`<script crossorigin="" src="/${path}"></script>`,false)
    }

    addManifestJson(){
        this.addElement(`<link rel="manifest" href="/manifest.json" crossorigin="use-credentials">`,true)
    }
}