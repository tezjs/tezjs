import { existsSync } from 'node:fs'
import dotenv  from 'dotenv'
import dotenvExpand from 'dotenv-expand'
import { loadConfig } from 'c12'
import { ENVIRONMENTS } from "../const/core.const"
import { commonContainer } from '@tezjs/common'
import { getParsedEnv } from './get-parsed-env'
import { writeEnv } from './write-env'
import { ParsedEnv } from '../interface/parsed-env.model'
import { setupConfig } from './setup-config'
export async function readConfig() {
    let filePath = `${commonContainer.buildOptions.rootDir}\\${ENVIRONMENTS}\\${commonContainer.buildOptions.mode ? `.env.${commonContainer.buildOptions.mode}`: `.env`}`;
    const port = 3000;
    let parsedEnv:ParsedEnv = {};
    if(existsSync(filePath)){
        const { parsed, error } = dotenv.config({
            debug: !!process.env.DEBUG || undefined,
            path:filePath
          })

          parsedEnv =getParsedEnv(parsed);
          dotenvExpand.expand({ parsed:parsedEnv.parsed })
          if(!commonContainer.buildOptions.port)
          commonContainer.buildOptions.port  = parsedEnv.server.env.PORT || parsedEnv.server.env.TEZ_PORT || port;
    }
    const { config:tezConfig, } = await loadConfig({
        name: 'tez',
        configFile: 'tez.config',
        dotenv: true,
        cwd:commonContainer.buildOptions.rootDir
    });
    setupConfig(tezConfig);
    writeEnv(parsedEnv)
}