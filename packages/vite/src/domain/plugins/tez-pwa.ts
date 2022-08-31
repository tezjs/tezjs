import { CommonPathResolver, getPath, readFileSync, writeFileSync } from "@tezjs/common";
import { build } from 'esbuild'
import {Plugin } from "vite"
import { IMPORT_SCRIPT_SERVICE_WORKER, SERVICE_WORKER_CACHE_VERSION, SERVICE_WORKER_JS_PATH } from "../../const/core.const";
import { commonContainer } from "@tezjs/common";
import { PwaConfig } from "@tezjs/types";
function replacer(code:string){
    code = code.replace(SERVICE_WORKER_CACHE_VERSION,commonContainer.buildOptions.buildVersion.toString());
    return code;
}
function getImport(path:string){
    return `
        const pwaConfig = require("${path}");
    `
}
function getPwaConfig(){
    if(commonContainer.tezConfig.pwaConfigPath )
        {
            let configPath = getPath([commonContainer.buildOptions.rootDir,commonContainer.tezConfig.pwaConfigPath]);
            return getImport(configPath.split('\\').join('/'));
        }
        return `const pwaConfig = {default:()=>{ return ${JSON.stringify(commonContainer.tezConfig.pwa)}; }}`;
}

function addManifestJson(pwaConfig:PwaConfig,commonPath:CommonPathResolver){
    if(pwaConfig.config)
        writeFileSync(commonPath.manifestJsonPath,pwaConfig.config);
}
export function tezPWA(): Plugin {
	return {
		name: "vite:tez-pwa",
		async generateBundle(_outputOptions) {
            if(commonContainer.tezConfig.pwaConfigPath || commonContainer.tezConfig.pwa){
                let commonPathResolver = new CommonPathResolver();
                const serviceWorkerTemplatePath = SERVICE_WORKER_JS_PATH();
                if(commonPathResolver.pathExists(serviceWorkerTemplatePath)){
                    let serviceWorkerCode = readFileSync(serviceWorkerTemplatePath,true) as string;
                    serviceWorkerCode = serviceWorkerCode.replace(IMPORT_SCRIPT_SERVICE_WORKER,getPwaConfig())
                    writeFileSync(commonPathResolver.serviceWorkerGenPath,serviceWorkerCode,true);
                    const result = await build({
                        entryPoints:[commonPathResolver.serviceWorkerGenPath],
                        minify:true,
                        write: false,
                        bundle:true,
                        sourcemap:false,
                        format: 'iife',
                        outdir:'/bundle',
                        logLevel: 'silent'
                    })
                    for(const output of result.outputFiles){
                        const code = replacer(output.text);
                        writeFileSync(commonPathResolver.serviceWorkerJsPath,code,true);
                    }
                    commonPathResolver.deleteFile(commonPathResolver.serviceWorkerGenPath)
                }
                addManifestJson((<PwaConfig>commonContainer.tezConfig.pwa),commonPathResolver)
            }
        }
	}
}