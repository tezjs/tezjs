import { CACHE_PATH } from "../const/app.const";
import { defaultContainer } from "../const/core.const";
import { getPath } from "../utils/get-path";

export class PathResolver {

    get payloadPath() {
        const { payloadRootPath } = defaultContainer.moduleOptions
        return getPath([defaultContainer.nuxtInstance.nuxt.options.rootDir, payloadRootPath, 'payload'], true);
    }

    get rootPath() {
        return getPath([defaultContainer.nuxtInstance.nuxt.options.rootDir, CACHE_PATH],true)
    }

    get routesJsonPath() {
        return getPath([this.rootPath, "routes.json"]);
    }

    get sitemapJsonPath() {
        return getPath([this.rootPath, "sitemap.json"]);
    }

    getCollectionPayloadPath(collectionName: string): string {
        return getPath([this.payloadPath, "collections", collectionName], true);
    }

    getFilterCollectionPayloadPath(collectionName: string): string {
        return getPath([this.payloadPath, "filter-collections", collectionName], true);
    }
}