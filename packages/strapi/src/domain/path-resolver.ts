import { CACHE_PATH } from "../const/app.const";
import { defaultContainer } from "../const/core.const";
import { getPath } from "../utils/get-path";

export class PathResolver {
    constructor(private builder: any) { }

    get payloadPath() {
        const { payloadRootPath } = defaultContainer.moduleOptions
        return getPath([this.builder.nuxt.options.rootDir, payloadRootPath, 'payload'], true);
    }

    get rootPath() {
        return getPath([this.builder.nuxt.options.rootDir, CACHE_PATH],true)
    }

    get routesJsonPath() {
        return getPath([this.rootPath, "routes.json"]);
    }

    get sitemapJsonPath() {
        return getPath([this.rootPath, "sitemap.json"]);
    }
}