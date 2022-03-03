import { existsSync } from "fs";
import { CommonPathResolver } from "../domain/common-path.resolver";
import { readFileSync } from "../functions/read-file-sync";
import { resolvePath } from "../functions/resolve-path";
import { TezConfig } from "@tezjs/types"
export const commonContainer:
    {
        setupConfig():void,
        tezConfig:TezConfig
        getAppRoutes():any[]
    } = new (class {
        tezConfig:TezConfig = {};
        setupConfig(){
            let configPath = resolvePath('tez.config.js');
            this.tezConfig = require(configPath)
        }

        getAppRoutes():any[]{
            var commonPath = new CommonPathResolver();
            let routes:any = readFileSync(commonPath.routesJsonPath)
            return routes;
        }

        setPayloadPath(){
            
            
        }

    })();