import { TEZJS_PATH } from "../const/core.const";
import { depsContainer } from "../const/deps-container.const";
import { DependencyConfig } from "../interface/dependency-config";
const DEPS_PATH="assets/deps.js";
const GLOB_PATH="assets/glob.js";

export class BundleModifier{
    deps:{[key:string]:DependencyConfig} = {};
    excludes:Array<string> = new Array<string>();
    css:{[key:string]:string}={};
    highestPathDepth:number=0;
    constructor(private bundle:any){
            this.run();
    }

    overwrite(){
        for (const [path, dependencyConfig] of Object.entries(this.deps)) {
            for(const importString of dependencyConfig.unUsedImports)
                this.bundle[path].code = this.bundle[path].code.replace(importString,'')
        }
    }

    private run(){
        this.addExcludeJsPaths();
        this.setDependency();
        this.removeBundleItem();
        depsContainer.setDeps({
            css:this.css,
            excludes:this.excludes,
            deps:this.deps,
            highestPathDepth:this.highestPathDepth
        });
    }

    private setDependency(){
        for (const [path] of Object.entries(this.bundle)) {
            this.deps[path] = this.setDependencies(path)
        }
    }


    private removeBundleItem(){
        delete this.bundle[DEPS_PATH]
        delete this.bundle[GLOB_PATH]
    }


   private addExcludeJsPaths(){
        this.setDependencies(TEZJS_PATH);
        if(this.deps[TEZJS_PATH])
            this.deps[TEZJS_PATH].js.forEach(x=>this.excludes.push(x));
    }



    private setDependencies(path:string){
            let deps:DependencyConfig ={js:new Array<string>(),css:new Array<string>(),unUsedImports:new Array<string>(),preload:new Array<string>()};
            if(this.bundle[path] && !this.deps[path]){
                let outputOption = this.bundle[path];
                if(outputOption.importedBindings){
                    Object.keys(outputOption.importedBindings).forEach(key=>{
                        if(outputOption.importedBindings[key].length > 0){
                            deps.js.push(key);
                            if(path===TEZJS_PATH){
                                deps.preload.push(key)
                            }
                                
                            let dependency = this.setDependencies(key);
                            dependency.css.forEach(item=>{if(deps.css.filter(x=>x=== item).length === 0) deps.css.push(item)})
                            dependency.js.forEach(item=> {if(deps.js.filter(x=>x=== item).length === 0 && this.excludes.filter(x=>x===item).length === 0) path === TEZJS_PATH ? this.excludes.push(item): deps.js.push(item)})
                        }else
                            deps.unUsedImports.push(this.getImportString(path.split('/').length-2,key))
                        })
                        for(let css of outputOption.viteMetadata.importedCss)
                            deps.css.push(css)
                }else if(outputOption.name.endsWith(".css"))
                        this.css[path] = outputOption.source;

                    this.deps[path] = deps;
                }
            
            return  this.deps[path];
        }
        getImportString(length:number,name:string){
            if(length>this.highestPathDepth)
                this.highestPathDepth = length;
            name = name.replace('assets/','');
            var path = length<=0?'./':'';
            for(var i=0;i<length;i++)
                path+='../'
            return `import"${path}${name}";`;
        }
    
    }

    

