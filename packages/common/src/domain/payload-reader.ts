import { CommonPathResolver } from "./common-path.resolver";
import { TezSeo } from "@tezjs/types";
import { getUrlLastPath } from "../functions/get-last-url-path";
import { getPath } from "../functions/get-path";
import { readFileSync } from "../functions/read-file-sync";

export class PayloadReader {
    _components:{slots:{[key:string]:any[]},masterPage;string};
    _tags:{[key:string]:any};
    _masterPage:{slots:{[key:string]:any[]}};
    isComponentExists:boolean;
    isMasterPageExists:boolean;
    isTagsExists:boolean;
    commonPath:CommonPathResolver; 
    private lastUrlPath:string;
    constructor(public route:{name:string,path:string,fPath:string,isPage:boolean,isAmpPage:boolean}){
        this.commonPath = new CommonPathResolver();
        this.lastUrlPath =route && route.fPath? getUrlLastPath(route.fPath) : "";
        this.isComponentExists = this.commonPath.pathExists(this.componentPath);
        this.isTagsExists = this.commonPath.pathExists(this.tagsPath)
    }

    get componentPath(){
        return getPath([this.commonPath.payloadPath,this.route.fPath,`${this.lastUrlPath}.json`]);
    }

    get masterPagePath(){
        return getPath([this.commonPath.payloadPath,"master-pages",`${this.components.masterPage.replace(/ /g,"-").toLowerCase()}.json`]);
    }

    get tagsPath(){
        return getPath([this.commonPath.payloadPath, this.route.fPath,"tags.json"]);
    }

    get components():Partial<{slots:{[key:string]:any[]},masterPage;string}>{
        if(!this._components && this.isComponentExists )
            this._components = readFileSync(this.componentPath) as {slots:{[key:string]:any[]},masterPage;string};
        return this._components || {};
    }

    get tags():TezSeo{
        if(!this._tags && this.isTagsExists )
            this._tags = readFileSync(this.tagsPath) as {slots:{[key:string]:any[]},masterPage;string} as TezSeo;
        return this._tags || {};
    }

    get masterPage():Partial<{slots:{[key:string]:any[]},layoutName:string}>{
        if(!this._masterPage && this.components.masterPage )
            this._masterPage = readFileSync(this.masterPagePath) as {slots:{[key:string]:any[]},masterPage;string};
        return this._masterPage || {};
    }

    getData(componentName:string){
        let componentDataPath = getPath([this.commonPath.payloadPath,this.route.fPath,`${componentName}.json`]);
        let data = {};
        if(this.commonPath.pathExists(componentDataPath))
            data = readFileSync(componentDataPath)
        return data;
    }
}