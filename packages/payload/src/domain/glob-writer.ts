import {  getPath, readFileSync,writeFileSync } from "@tezjs/common";
import { PathResolver } from "./path-resolver";

export class GlobWriter{
    components:Array<string>;
    layouts:Array<string>;
    pages:Array<string>;
    pathResolver:PathResolver;

    constructor(){
        this.pathResolver = new PathResolver();
        const globJson:any  = readFileSync(this.pathResolver.globJsonPath) || {components:[],layouts:[],pages:[]};
        this.components = globJson.components;
        this.layouts = globJson.layouts;
        this.pages = globJson.pages || [];
        
    }

    async setLayoutComponents(){
        let components = await this.pathResolver.commonPath.getFiles("layouts","vue");
        components.forEach(component=>this.addLayout(component)) 
    }

    addComponent(name:string){
        const isPathExits = this.pathResolver.pathExists(getPath([this.pathResolver.componentsPath,`${name}.vue`],false));
        if(this.components.filter(t=>t === name).length === 0 && isPathExits)
            this.components.push(name)
        return isPathExits;
    }

    addLayout(name:string){ 
        if(this.layouts.filter(t=>t === name).length === 0)
            this.layouts.push(name)
    }

    addPage(name:string){
        if(this.pages.filter(t=>t === name).length === 0)
            this.pages.push(name)
    }

    write(){
        writeFileSync(this.pathResolver.globJsonPath,{components:this.components,layouts:this.layouts,pages:this.pages})
    }

}