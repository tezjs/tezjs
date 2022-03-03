import { CACHE_PATH } from "../const/app.const";
import { getPath } from "../functions/get-path";

export class CommonPathResolver {

    get rootPath() {
        return getPath([process.cwd(), CACHE_PATH],true)
    }

    get routesJsonPath() {
        return getPath([this.rootPath, "routes.json"]);
    }

    get redirectRoutesJsonPath() {
        return getPath([this.rootPath, "redirect-routes.json"]);
    }
    
}