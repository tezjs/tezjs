import { existsSync } from "fs";
import { CACHE_PATH } from "../const/app.const";
import { commonContainer } from "../const/container.const";
import { getPath } from "../functions/get-path";

export class CommonPathResolver {

    get rootPath() {
        return getPath([process.cwd()],true)
    }

    get cachePath() {
        return getPath([process.cwd(), CACHE_PATH],true)
    }

    get routesJsonPath() {
        return getPath([this.cachePath, "routes.json"]);
    }

    get redirectRoutesJsonPath() {
        return getPath([this.cachePath, "redirect-routes.json"]);
    }

    get payloadFolderPath(){
        let path = commonContainer.tezConfig.payloadPath;
        if(!path){
            let publicFolder = `${process.cwd()}\\public`;
            let staticFolder = `${process.cwd()}\\static`;
          if(existsSync(publicFolder))
            path = commonContainer.tezConfig.payloadPath = "public";
          else if(existsSync(staticFolder))
            path = commonContainer.tezConfig.payloadPath = "static";
        }
        return getPath([process.cwd(), path]);
    }
    
}