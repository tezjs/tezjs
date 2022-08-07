import { CommonPathResolver } from "@tezjs/common";
import { TezModuleConfig ,HtmlPage, PayloadGenratorConfig } from "@tezjs/types";
import { globby } from "globby";
import { replacePath } from "../funcs/replace-path";
export const  routeModule:TezModuleConfig = {
    async payload(config: PayloadGenratorConfig) :Promise<{[key:string]:{components:Array<{slotName:string,data:any}>,layoutName:string,head:HtmlPage}} | null>{
        const pathResolver = new CommonPathResolver(); 
        let paths = await globby([
                'pages'
              ], {expandDirectories: {
                extensions: ['vue']
            },cwd:pathResolver.sourceCodePath, followSymbolicLinks: true});
            let uris = {};
            paths.forEach(path=>{
                let transformedPath = replacePath(path.split('pages/')[1]);
                    uris[transformedPath === 'index' ? '/':`/${transformedPath}`] ={
                        components:[{name:path.replace(".vue","")}],
                    };
            })
        return uris;
    }
}