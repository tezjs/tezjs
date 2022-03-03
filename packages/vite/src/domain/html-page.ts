import { CommonPathResolver,readFileSync } from "@tezjs/common"
export class HtmlPage{
    commonPath:CommonPathResolver;
    
    constructor(private html:string){

    }

    createPage(route:{[key:string]:any}) {
        readFileSync(this.commonPath.rootPath)
    }
}