import { commonContainer } from "@tezjs/common"
import { TezSeo } from "@tezjs/types";
import { KEYWORDS, PROPERTY } from "../../../payload/src/const/app.const";
import { NAME } from "../const/core.const";
import { Head,HtmlPage } from "@tezjs/types";
import { JsCodeGen } from "./html/js-code-gen";
import { appContainer } from "../const/container.const";
import { mergeConfig } from "vite";

export class Seo extends JsCodeGen  {
    seo: TezSeo;
    htmlMeta:HtmlPage 
    preHeadElements:string[]
    postHeadElements:string[]
    bodyElements:string[]
    customAttribute = {
        tezjs:`data-head="tezjs"`,
        preload:`data-head="tezjs-preload"`
    }
    constructor(route: {name:string,path:string,fPath:string,isAmpPage:boolean}) {
        super(route);
        this.htmlMeta = mergeConfig(commonContainer.tezConfig.htmlMeta,{head:this.tags});
        this.preHeadElements = new Array<string>();
        this.postHeadElements = new Array<string>();
        this.bodyElements = new Array<string>();
        if(route.isAmpPage){
            this.customAttribute.tezjs = ''
            this.customAttribute.preload = ''
        }
            
    }

    get headChildElements(){
        return `${this.preElementString}\n${this.postElementString}`;
    }

    get bodyChildElements(){
        return this.bodyChildElementString;
    }

    buildElements(){
        this.addTitle();
        this.addInlineStyle();
        this.addPreConnects();
        this.addPreFetchDns();
        this.addPreloads();
        this.addCanonical();
        this.setMetaTags();
        this.addPageSchema();
        this.addFavicon();
        this.addPreFetch();
        this.addLinks();
        this.addBody();
    }

    addTitle() {
        if (this.htmlMeta.head.title)
            this.addHeadChildElement(`<title ${this.customAttribute.tezjs}>${this.htmlMeta.head.title}</title>`,true)
    }

    addCanonical() {
        if (this.htmlMeta.head.canonical)
            this.addHeadChildElement(`<link ${this.customAttribute.tezjs} rel="canonical" href="${this.htmlMeta.head.canonical}"/>`,false)
    }

    setMetaTags(){
        if(this.htmlMeta.head.metaTag){
            this.addMetaTags(NAME);
            this.addMetaTags(PROPERTY);
        }
    }

    addMetaTags(type:string)
    {
        if(this.htmlMeta.head.metaTag[type]){
            Object.keys(this.htmlMeta.head.metaTag[type]).forEach(key=>{
                    this.addMeta(type,key,this.htmlMeta.head.metaTag[type][key])
            })
        }
    }

    addMeta(type:string,key:string,content:string){
        this.addHeadChildElement(`<meta ${this.customAttribute.tezjs} ${type}="${key}" content="${content}">`,false)
    }

    addFavicon(){
        if((<Head>this.htmlMeta.head).favicon)
            this.addHeadChildElement(`<link rel="icon" href="${(<Head>this.htmlMeta.head).favicon}"/>`,false)
        else
            this.addHeadChildElement(`<link rel="icon" type="image/png" href="data:image/png;base64,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"/>`,false)
    }

    addLinks(){
        if(this.htmlMeta.head?.links)
        {
            for(const linkItem of this.htmlMeta.head?.links){
                let elementAtrribute:string = '';
                for (const [attributeName, value] of Object.entries(linkItem))
                    elementAtrribute+=`${attributeName}="${value}" `;
                this.addHeadChildElement(`<link ${elementAtrribute} />`,false)
            }
        }
    }

    addPageSchema(){
        if(this.htmlMeta.head.linkingData){
            const splitLinkingData = this.htmlMeta.head.linkingData.split("--");
            splitLinkingData.forEach(data=>{
                this.addHeadChildElement(`<script ${this.customAttribute.tezjs}  type="application/ld+json">${JSON.stringify(JSON.parse(this.replaceText(data.trim())))}</script>`,false)
            })
        }
    }

    private replaceText(text:string){
        if(text.charAt(0) === '{' && text.charAt(1) === "'"){
            const keys = [
                new RegExp(/"/,"g"),
                new RegExp("\\['","g"),
                new RegExp("\\']","g")
            ];
            const replacer = [
                '\\"',
                '["',
                '"]'
            ];
            keys.forEach((key:RegExp,index:number)=>{
                text = text.replace(key,replacer[index])
            })
            text = text.replace(/('(?=(,\s*')))|('(?=:))|((?<=([:,]\s*))')|((?<={)')|('(?=}))/g, '"');
        }
        return text.replace(/\\n/g, '').replace(/\n/g, '').replace(/\t/g, '')
    }

    addPreloads(){
        if(this.htmlMeta.head?.preloads){
            this.htmlMeta.head.preloads.forEach(item=>{
                if(item.type === "module")
                    this.addModulePreload(item.path,true)
                else
                    this.addPreload(item.path,item.path.indexOf(".js") !== -1 ? "script": item.path.indexOf(".css") !== -1 ? "style":"image",true)
            })
        }
    }

    addPreload(path:string,as:string,forAll:boolean=false){
        this.addHeadChildElement(`<link ${this.customAttribute.preload} rel="preload" as="${as}" ${as === "script" ? "crossorigin":''}  href="${forAll? path : `/${path.replace(/\/\//g, "/")}`}">`,true)
    }


    addModulePreload(path:string,forAll:boolean=false){
        path = path.charAt(0) === '/'? path: `/${path}`;
        this.addHeadChildElement(`<link ${this.customAttribute.preload}  rel="modulepreload" href="${forAll? path : `${path}`}">`,true)
    }

    addScript(path:string,isAppendToBody:boolean= false){
        const elementString = `<script crossorigin="" type="module" src="/${path}"></script>`;
        if(!isAppendToBody)
            this.addHeadChildElement(elementString,false)
        else
            this.addBodyChildElement(elementString)
        
    }

    addStyle(path:string,isAppendToBody:boolean= false){
        path = path.charAt(0) === '/'? path: `/${path}`;
        const elementString = `<link rel="stylesheet" href="${path}"></link>`;
        if(!isAppendToBody)
            this.addHeadChildElement(elementString,false)
        else
            this.addBodyChildElement(elementString)
    }

    
    addManifestJson(){
        this.addHeadChildElement(`<link ${this.customAttribute.tezjs} rel="manifest" href="/manifest.json" crossorigin="use-credentials">`,true)
    }

    addInlineScript(name:string,code:string){
        this.addBodyChildElement(`<script type="module" ${this.customAttribute.tezjs} >${code}</script>`)
    }

    addBody(){
        this.addDevScript();
        if(this.htmlMeta.head)
            this.addReferences(this.htmlMeta.head,false)
        if(this.htmlMeta.body)
            this.addReferences(this.htmlMeta.body,true)
    }

    addReferences(referenceInfo:any,isAppendToBody:boolean){
        if(referenceInfo.inlineScript)
            referenceInfo.inlineScript.forEach((item)=>{this.addInlineScript(item.name,item.code)})
        if(referenceInfo.script)
            referenceInfo.script.forEach(script=>this.addScript(script.src,isAppendToBody))
        if(referenceInfo.style)
            referenceInfo.style.forEach(style=>this.addStyle(style.href,isAppendToBody))
    }

    addInlineStyle(){
        if(this.htmlMeta.head?.inlineStyle){
            let inlineCode:string = '';
            this.htmlMeta.head?.inlineStyle.forEach((item)=>{
                let attribute = `data-href="${item.name}" ${this.customAttribute.tezjs}`
                if(this.route.isAmpPage){
                    console.log(this.route)
                    inlineCode +=`${item.code}\n`
                }else
                    this.addHeadChildElement(`<style  ${attribute} >${item.code}</style>`,true)
            })
            if(inlineCode)
                this.addHeadChildElement(`<style  amp-custom="" >${inlineCode}</style>`,true)
        }
        
    }


    get preElementString(){
        return this.getElementString(this.preHeadElements)
    }

    get postElementString(){
        return this.getElementString(this.postHeadElements)
    }

    get bodyChildElementString(){
        return this.getElementString(this.bodyElements)
    }

    private getElementString(elements:string[]){
        let element:string = '';
        elements.forEach(t=>element+=t);
        return element

    }

    addHeadChildElement(element:string,isPre:boolean){
        if(isPre)
            this.preHeadElements.push(`${element}\n`);
        else 
            this.postHeadElements.push(`${element}\n`)
    }

    addBodyChildElement(element:string){
        this.bodyElements.push(`${element}\n`)
    }

    addPreConnects(){
        if(this.htmlMeta.head?.preConnect)
            this.htmlMeta.head?.preConnect.forEach(domain=>this.addHeadChildElement(`<link rel="preconnect" href="${domain}"/>`,true));
    }

    addPreFetchDns(){
        if(this.htmlMeta.head?.preFetchDns)
            this.htmlMeta.head?.preFetchDns.forEach(domain=>this.addHeadChildElement(`<link rel="dns-prefetch" href="${domain}"/>`,true));
    }

    addPreFetch(){
        if(this.htmlMeta.head?.preFetch)
            this.htmlMeta.head?.preFetch.forEach(path=>this.addHeadChildElement(`<link rel="prefetch" as="${path.indexOf(".js") !== -1 ? "script": path.indexOf(".css") !== -1 ? "style":"image"}" href="${path}"/>`,false));
    }

    addDevScript(){
        if(commonContainer.buildOptions.commandName === "dev"){
            if(!this.htmlMeta.body)
                this.htmlMeta.body = {inlineScript:[]}
            this.htmlMeta.body.inlineScript.push({name:"deps",code:`window.localStorage.setItem("tzV",${appContainer.versionId});`})
        }
    }
}