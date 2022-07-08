import {writeFileSync,getPath, commonContainer } from "@tezjs/common"
import { minify } from 'html-minifier';
import { indexTemplate } from "../const/index.template";
import getUrl from "../functions/get-url";
import { Seo } from "./seo";
import { HtmlPage as iHtmlPage } from '@tezjs/types'
import { mergeConfig } from "vite";
export class HtmlPage extends Seo {
    constructor(route: {name:string,path:string,fPath:string}){
        super(route);
        route.path = getUrl(route.path)
        
    }

    createPage(htmlMeta?:iHtmlPage) {
        this.mergeHtmlMeta(htmlMeta)
        return this.buildHtml();
    }

    mergeHtmlMeta(htmlMeta:iHtmlPage){
        if(htmlMeta)
        this.htmlMeta = mergeConfig(this.htmlMeta,htmlMeta)
    }

    

    buildHtml(){
        this.buildElements();
        var html = commonContainer.buildOptions.commandName === "dev"? indexTemplate(<Seo>this) :  minify(indexTemplate(<Seo>this),{minifyJS:true,collapseWhitespace: true,
            removeComments: true,
            removeEmptyAttributes: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true});
        if(commonContainer.buildOptions.commandName === "build"){
            let filePath = getPath([this.commonPath.rootPath,'dist',this.route.path],true);
            filePath = getPath([filePath,"index.html"]);
            writeFileSync(filePath,html,true)
            if(this.route.path === "/index")
                writeFileSync(getPath([this.commonPath.rootPath,'dist',"index.html"],false),html,true)
        }
        return html
    }
}