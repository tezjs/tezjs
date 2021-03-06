import { readFileSync,writeFileSync } from "@tezjs/common";
import { PathResolver } from "./path-resolver";

export class GlobWriter{
    components:Array<string>;
    layouts:Array<string>;
    pathResolver:PathResolver;

    constructor(){
        this.pathResolver = new PathResolver();
        const globJson:any  = readFileSync(this.pathResolver.globJsonPath) || {components:[],layouts:[]};
        this.components = globJson.components;
        this.layouts = globJson.layouts;
    }

    addComponent(name:string){
        if(this.components.filter(t=>t === name).length === 0)
            this.components.push(name)
    }

    addLayout(name:string){
        if(this.layouts.filter(t=>t === name).length === 0)
            this.layouts.push(name)
    }

    write(){
        writeFileSync(this.pathResolver.globJsonPath,{components:this.components,layouts:this.layouts})
    }

}