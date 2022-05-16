import {writeFileSync,  CommonPathResolver,readFileSync,getPath, commonContainer, createPath } from "@tezjs/common"
import { minify } from 'html-minifier';
import { getComponentName } from "../functions/get-component-name";
import getUrl from "../functions/get-url";
import { getUrlLastPath } from "../functions/get-url-last-path";
import { Seo } from "./seo";

export class HtmlPage extends Seo {
    tags:{[key:string]:any};
    components:{slots:{[key:string]:any[]},masterPage;string};
    lastUrlPath:string;
    private files:string[]
    preloads:Array<Array<string>> = new Array<Array<string>>()
    constructor(public html:string,private route:{[key:string]:any}){
        super(route);
        route.path = getUrl(route.path)
        this.lastUrlPath = getUrlLastPath(route.path);
        this.components = readFileSync( getPath([this.commonPath.payloadPath,route.path,`${this.lastUrlPath}.json`])) as {slots:{[key:string]:any[]},masterPage;string};
        if(this.components && this.components.masterPage){
            let masterPage = readFileSync( getPath([this.commonPath.payloadPath,"master-pages",`${this.components.masterPage.replace(/ /g,"-").toLowerCase()}.json`])) as {slots:{[key:string]:any[]}};
            if(masterPage)
                this.components.slots = {...masterPage.slots,...this.components.slots}
        }
    }

    createPage(files:string[]) {
        this.files = files;
     this.addTitle();  
     this.addVendor();
     this.addPreload(`payload${this.route.path}${this.lastUrlPath}.json`,'fetch')
     this.addComponentDependencies();
     this.setMetaTags();
     this.addCanonical();
     this.addPageSchema();
     this.addScript('registerSW.js');
     if(commonContainer.tezConfig.pwa)
        this.addManifestJson();
     this.buildHtml();
    }

    buildHtml(){
        this.html = this.html.replace("<head>",`<head>${this.preElementString}`);
        this.html = this.html.replace("</head>",`${this.postElementString}</head>`);
        this.html = minify(this.html,{minifyJS:true,collapseWhitespace: true,
            removeComments: true,
            removeEmptyAttributes: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true});
        let filePath = getPath([this.commonPath.rootPath,'dist',this.route.path],true);
        filePath = getPath([filePath,"index.html"]);
        writeFileSync(filePath,this.html,true)
    }

    addComponentDependencies(){
        if(this.components && this.components.slots){
            Object.keys(this.components.slots).forEach(slotName=>{
                this.components.slots[slotName].forEach((item:any)=>{
                    let componentName = getComponentName(item.length == 2 ? item[1]:item[0]);
                    let assets = this.getAssets(componentName);
                    if(assets.length>0 && this.preloads.indexOf(assets) === -1)
                    this.preloads.push(assets)
                })
            })
            let addedItems:string[] = [];
            var lengthItem = this.preloads.length >3 ?3 : this.preloads.length;
            for(var i=0;i<lengthItem;i++){
                let item = this.preloads[i];
                let filePath = item[0];
                if(addedItems.indexOf(filePath) === -1){
                    addedItems.push(filePath)
                    this.addPreload(filePath,filePath.indexOf(".js") !== -1 ? "script":"style");
                    if(item.length>1){
                        filePath = item[1]
                        this.addPreload(filePath,filePath.indexOf(".js") !== -1 ? "script":"style");
                    }
                }
            }
        }
    }

    private addVendor(){
        let assets = this.getAssets("vendor");
        if(assets.length >0){
            this.addModulePreload(assets[0]);
            this.html = this.html.replace(`<link rel="modulepreload" href="/${assets[0]}">`,"")
        }
    }

    private getAssets(assetName:string){
        let assets = new Array<string>();
            this.files.forEach(path=>{
                let splitText = path.split('.');
                let name = splitText[0].split('/')[1];
                if(name.toLowerCase() === assetName.toLowerCase())
                    assets.push(path)
            });
            return assets;
    }

}