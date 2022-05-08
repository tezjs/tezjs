import { existsSync } from "fs";
import { CommonPathResolver } from "../domain/common-path.resolver";
import { readFileSync } from "../functions/read-file-sync";
import { resolvePath } from "../functions/resolve-path";
import { TezConfig } from "@tezjs/types"

export const commonContainer:
    {
        setupConfig(tezConfig?:TezConfig):void,
        tezConfig:TezConfig
        getAppRoutes():any[]
        expressConfig:{[key:string]:any}
    } = new (class {
        tezConfig:TezConfig = {};
        expressConfig = {};
        setupConfig(tezConfig?:TezConfig){
            if(tezConfig)
                this.tezConfig = tezConfig
            else
                this.tezConfig = {
                    strapi:{
                        version:4,
                        siteUrl:"http://localhost:3000",
                        apiUri: "http://localhost:1337",  
                        robots:{
                            environmentName:"Dev"
                        }, 
                        optimization: {
                            sourcePagination:true,
                        }
                    }
                };
            this.setExpress();
        }

        getAppRoutes():any[]{
            var commonPath = new CommonPathResolver();
            let routes:any = readFileSync(commonPath.routesJsonPath)
            return routes || [];
        }

        setExpress(){
            if(this.tezConfig && this.tezConfig.express && this.tezConfig.express.path){
                let configPath = resolvePath(this.tezConfig.express.path);
                if(existsSync(configPath))
                this.expressConfig = require(configPath)
            }
        }
    })();