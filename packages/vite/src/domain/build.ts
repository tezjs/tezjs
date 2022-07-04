import { commonContainer, CommonPathResolver, getPath } from "@tezjs/common";
import {globby} from 'globby';
import {build as viteBuild,mergeConfig, UserConfig} from 'vite'
import { VITE_SERVER_CONFIG } from "../const/vite-server-config.const";
import { readConfig } from "../functions/read-config";
import { appContainer } from "../const/container.const";
import { PageCollection } from "@tezjs/payload";
import getUrl from "../functions/get-url";
import { JsCodeGen } from "./html/js-code-gen";
import { writeDepsAndGlob } from "../functions/write-deps";
import { addUpdateInputs } from "../functions/add-update-inputs";
export  async function build(){
    await readConfig();
			const pageCollection = new PageCollection();
      		await pageCollection.generate();
    let tezConfig = commonContainer.tezConfig;
    const pathResolver = new CommonPathResolver();
    const userConfig = tezConfig.viteOptions || {};
    const routes = commonContainer.getAppRoutes();
    var clearDist = true;
    for(const route of routes){
        let jsGenCode = new JsCodeGen(route);
        jsGenCode.gen();
    }
    let paths = await globby([
            'deps'
          ], {expandDirectories: {
            extensions: ['ts']
        },cwd:pathResolver.cachePath, followSymbolicLinks: true});
        let inputs:{[key:string]:string} = {};
        let deps={};
        for(const fPath of paths){
            const key = fPath.split('deps/')[1].replace(".ts","");
            inputs[key]= `${getPath( [pathResolver.cachePath,fPath],false)}`
            deps[key]=`./deps/${key}`;
        }
        writeDepsAndGlob(deps);
        const buildInput = {
            build:{
                emptyOutDir: clearDist,
                rollupOptions:{
                    input:addUpdateInputs(inputs,pathResolver)
                }
            }
        }
        let viteConfig:UserConfig = mergeConfig(
        VITE_SERVER_CONFIG(),{...userConfig,...{mode:'production'}}
    )
            viteConfig= mergeConfig(viteConfig,buildInput)
    await viteBuild(viteConfig);
    clearDist = false;
    
}