import { CommonPathResolver, writeFileSync } from "@tezjs/common";
import { build } from 'esbuild'
import {Plugin } from "vite"
import { SERVICE_WORKER_CACHE_VERSION, SERVICE_WORKER_JS_PATH } from "../../const/core.const";
import { commonContainer } from "@tezjs/common";

export function tezPWA(): Plugin {
	return {
		name: "vite:tez-pwa",
		async generateBundle(_outputOptions) {
            let commonPathResolver = new CommonPathResolver();
            const serviceWorkerTemplatePath = SERVICE_WORKER_JS_PATH();
            if(commonPathResolver.pathExists(serviceWorkerTemplatePath)){
                const result = await build({
                    entryPoints:[serviceWorkerTemplatePath],
                    minify:true,
                    write: false,
                    sourcemap:false,
                    format: 'iife',
                    outdir:'/bundle',
                    logLevel: 'silent'
                })
                for(const output of result.outputFiles){
                    const code = output.text.replace(SERVICE_WORKER_CACHE_VERSION,commonContainer.buildOptions.buildVersion.toString())
                    writeFileSync(commonPathResolver.serviceWorkerJsPath,code,true);
                }
                    
            }
        }
	}
}