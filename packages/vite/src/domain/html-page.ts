import { CommonPathResolver,readFileSync,getPath, commonContainer } from "@tezjs/common"
import { getComponentName } from "../../../payload/src/utils/get-component-name";
import { getUrlLastPath } from "../functions/get-url-last-path";
import { Seo } from "./seo";
export class HtmlPage extends Seo {
    tags:{[key:string]:any};
    components:any[];
    lastUrlPath:string;
    private files:string[]
    constructor(private html:string,private route:{[key:string]:any}){
        super(route);
        this.lastUrlPath = getUrlLastPath(route.path);
        this.components = readFileSync( getPath([this.commonPath.payloadFolderPath,route.path,`${this.lastUrlPath}.json`])) as any[];
    }

    createPage(files:string[]) {
        this.files = files;
     this.addTitle();  
     this.addPreload(`/${commonContainer.tezConfig.payloadPath}/${this.route.path}/${this.lastUrlPath}.json`)
    
    }

    addComponentDependencies(){
        this.components.forEach((item:any)=>{
            let componentName = getComponentName(item.lenght == 2 ? item[1]:item[0]);
            // let scriptPath = this.files.filter(path=>);
            // let stylePath = '';
        })
    }

}