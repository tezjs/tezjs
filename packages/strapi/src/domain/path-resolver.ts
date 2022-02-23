import { CACHE_PATH } from "../const/app.const";
import { defaultContainer } from "../const/core.const";
import { getPath } from "../utils/get-path";

export class PathResolver {

    get publicFolder() {
        const { payloadRootPath } = defaultContainer.moduleOptions
        return getPath([defaultContainer.nuxtInstance.nuxt.options.rootDir, payloadRootPath], true);
    }

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

    get robotsTxtPath() {
        return getPath([this.publicFolder, "robots.txt"]);
    }

    get redirectRoutesJsonPath() {
        return getPath([this.publicFolder, "redirect-routes.json"]);
    }

    get sitemapJsonPath() {
        return getPath([this.publicFolder, "sitemap.json"]);
    }

    get sitemapXmlPath() {
        return getPath([this.publicFolder, "sitemap.xml"]);
    }

    get sitemapNotMappedJsonPath() {
        return getPath([this.publicFolder, "sitemap-not-mapped.json"]);
    }

    getCollectionPayloadPath(collectionName: string): string {
        return getPath([this.payloadPath, "collections", collectionName], true);
    }

    getFilterCollectionPayloadPath(collectionName: string): string {
        return getPath([this.payloadPath, "filter-collections", collectionName], true);
    }
}