import { getFriendlyComponentName } from "@tezjs/payload";
import { isPageComponent } from "../../../payload/src/utils/is-page-component";
import { DepsContainerConfig } from "../interface/deps-container-config";
import { RouteComponent } from "../interface/route-component";
import { depsContainer } from "./deps-container.const";



export const routeComponentWriter:
    {
        addComponent(path:string,component:string,isPre:boolean,isLayout?:boolean):void;        
        getRouteComponent(path:string):RouteComponent;
        getPreDeps(path:string):Array<string>;
        getPostDeps(path:string):Array<string>;
    } = new (class {
        routeComponents:{[key:string]:RouteComponent};
        depsConfig:DepsContainerConfig;

        constructor(){
            this.routeComponents = {};
            
        }
        addComponent(path:string,component:string,isPre:boolean,isLayout:boolean = false){
            this.depsConfig = depsContainer.getDeps();
            let componentSuffix = isLayout?"layout":"component";
            componentSuffix = isPageComponent(component) ? "page":componentSuffix;
            let key = isPre?"pre":"post";
            if(!this.routeComponents[path])
                this.routeComponents[path] = {pre:new Array<string>(),post:new Array<string>()};
            let componentFileName = `${getFriendlyComponentName(component)}.${componentSuffix}`;
            this.routeComponents[path][key].push(componentFileName);
            if(!this.routeComponents[path].deps)
                this.routeComponents[path].deps = {pre:new Array<string>(),post:new Array<string>()}
            this.addDeps(path,componentFileName,key)
        }

        addDeps(routePath:string,name:string,keyName:string){
            const filePath  = `assets/${name.toLowerCase()}.js`;
            
            if(this.depsConfig && this.depsConfig.deps && this.depsConfig.deps[filePath]){
                this.addJsRefs(routePath,filePath,keyName)
            }
        }

        addJsRefs(routePath:string,filePath:string,keyName:string){
            if(this.depsConfig.deps[filePath]){
                const dependencyConfig = this.depsConfig.deps[filePath]
                dependencyConfig.js.forEach(path=> {
                    let isNotExist = this.addPath(routePath,path,keyName)
                    if(isNotExist)
                        this.addJsRefs(routePath,path,keyName)
                })
                dependencyConfig.css.forEach(path=>{
                    this.addPath(routePath,path,keyName)
                })
                this.addPath(routePath,filePath,keyName)
            }
        }

        addPath(routePath:string,filePath:string,keyName:string){
            let collection = this.routeComponents[routePath].deps[keyName];
            let isNotExist = (collection.filter(t=>t===filePath).length === 0 && this.depsConfig.excludes.filter(t=>t===filePath).length === 0)
            if(isNotExist)
                collection.push(filePath);
            return isNotExist;
        }

        getRouteComponent(path:string){
            if(this.routeComponents[path])
               return this.routeComponents[path];
            return {};
        }

        getPreDeps(path:string){
            if(this.routeComponents[path])
               return this.routeComponents[path].deps.pre;
            return [];
        }

        getPostDeps(path:string){
            if(this.routeComponents[path])
               return this.routeComponents[path].deps.post;
            return [];
        }
    
    })();
