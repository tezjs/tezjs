import { CommonPathResolver } from "../domain/common-path.resolver";
import { readFileSync } from "../functions/read-file-sync";
import { resolvePath } from "../functions/resolve-path";
export const fileContainer:
    {
        setupConfig():void,
        tezConfig:{[key:string]:any}
        getAppRoutes():any[]
    } = new (class {
        tezConfig:{[key:string]:any} = {};
        setupConfig(){
            let configPath = resolvePath('tez.config.js');
            this.tezConfig = require(configPath)
        }

        getAppRoutes():any[]{
            var commonPath = new CommonPathResolver();
            let routes:any = readFileSync(commonPath.routesJsonPath)
            return routes;
        }

    })();