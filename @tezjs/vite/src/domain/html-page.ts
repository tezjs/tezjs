import {writeFileSync,  CommonPathResolver,readFileSync,getPath, commonContainer, createPath } from "@tezjs/common"
import { minify } from 'html-minifier';
import { getComponentName } from "../functions/get-component-name";
import getUrl from "../functions/get-url";
import { getUrlLastPath } from "../functions/get-url-last-path";
import { Seo } from "./seo";

export class HtmlPage extends Seo {
    tags:{[key:string]:any};
    commonPath:CommonPathResolver
    components:any[];
    lastUrlPath:string;
    private files:string[]
    preloads:Array<Array<string>> = new Array<Array<string>>()
    constructor(private html:string,private route:{[key:string]:any}){
        super(route);
        route.path = getUrl(route.path)
        this.lastUrlPath = getUrlLastPath(route.path);
        this.components = readFileSync( getPath([this.commonPath.payloadFolderPath,"payload",route.path,`${this.lastUrlPath}.json`])) as any[];
        this.commonPath = new CommonPathResolver();
    }

    createPage(files:string[]) {
        this.files = files;
     this.addTitle();  
     this.addVendor();
     this.addPreload(`${commonContainer.tezConfig.payloadPath}/${this.route.path}/${this.lastUrlPath}.json`,'fetch')
     this.addComponentDependencies();
     this.setMetaTags();
     this.addCanonical();
     this.addPageSchema();
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
        if(this.components && Array.isArray(this.components)){
            this.components.forEach((item:any)=>{
                let componentName = getComponentName(item.length == 2 ? item[1]:item[0]);
                let assets = this.getAssets(componentName);
                if(assets.length>0)
                this.preloads.push(assets)
            })
            var lengthItem = this.preloads.length >3 ?3 : this.preloads.length;
            for(var i=0;i<lengthItem;i++){
                let item = this.preloads[i];
                let filePath = item[0];
                this.addPreload(filePath,filePath.indexOf(".js") !== -1 ? "script":"style");
                if(item.length>1){
                    filePath = item[1]
                    this.addPreload(filePath,filePath.indexOf(".js") !== -1 ? "script":"style");
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