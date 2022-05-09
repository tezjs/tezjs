import { existsSync } from 'node:fs'
import dotenv  from 'dotenv'
import dotenvExpand from 'dotenv-expand'
import { loadConfig } from 'c12'
import { ENVIRONMENTS } from "../const/core.const"
export async function readConfig(mode:string,rootPath:string){
    let filePath = `${rootPath}\\${ENVIRONMENTS}\\${mode ? `.env.${mode}`: `.env`}`;
    if(existsSync(filePath)){
        const { parsed, error } = dotenv.config({
            debug: !!process.env.DEBUG || undefined,
            path:filePath
          })
          dotenvExpand.expand({ parsed })
    }
    const { config:tezConfig, } = await loadConfig({
        name: 'tez',
        configFile: 'tez.config',
        dotenv: true,
        cwd:rootPath
    });
    return tezConfig;
}