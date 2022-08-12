import { commonContainer, CommonPathResolver } from "@tezjs/common";
import { depsContainer } from "../const/deps-container.const";
import { DependencyConfig } from "../interface/dependency-config";
const DEPS_PATH="assets/deps.js";
const GLOB_PATH="assets/glob.js";

export class BundleModifier{
    deps:{[key:string]:DependencyConfig} = {};
    excludes:Array<string> = new Array<string>();
    css:{[key:string]:string}={};
    highestPathDepth:number=0;
    commonPath:CommonPathResolver;
    globPath:string;
    depsPath:string;
    constructor(private bundle:any){
        this.commonPath = new CommonPathResolver();
        this.globPath = `assets/glob.${commonContainer.buildOptions.buildVersion}.js`
        this.depsPath = `assets/deps.${commonContainer.buildOptions.buildVersion}.js`
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
        delete this.bundle[this.depsPath]
        delete this.bundle[this.globPath]
    }


   private addExcludeJsPaths(){
        this.setDependencies(this.commonPath.tezJsPath);
        if(this.deps[this.commonPath.tezJsPath])
            this.deps[this.commonPath.tezJsPath].js.forEach(x=>this.excludes.push(x));
    }



    private setDependencies(path:string){
            let deps:DependencyConfig ={js:new Array<string>(),css:new Array<string>(),unUsedImports:new Array<string>(),preload:new Array<string>()};
            if(this.bundle[path] && !this.deps[path]){
                let outputOption = this.bundle[path];
                if(outputOption.importedBindings){
                    Object.keys(outputOption.importedBindings).forEach(key=>{
                        if(outputOption.importedBindings[key].length >= 0){
                            if(outputOption.importedBindings[key].length > 0)
                                deps.js.push(key);
                            if(path===this.commonPath.tezJsPath){
                                deps.preload.push(key)
                            }
                                
                            let dependency = this.setDependencies(key);
                            dependency.css.forEach(item=>{if(deps.css.filter(x=>x=== item).length === 0) deps.css.push(item)})
                            if(outputOption.importedBindings[key].length > 0)
                                dependency.js.forEach(item=> {if(deps.js.filter(x=>x=== item).length === 0 && this.excludes.filter(x=>x===item).length === 0) path === this.commonPath.tezJsPath ? this.excludes.push(item): deps.js.push(item)})
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

    

