import { defaultContainer } from "../const/core.const";
import { CommonPathResolver,getPath } from "@tezjs/common"

export class PathResolver {
    private commonPath:CommonPathResolver;
    constructor(){
        this.commonPath = new CommonPathResolver();
    }
    get publicFolder() {
        const { payloadRootPath } = defaultContainer.moduleOptions
        return getPath([process.cwd(), payloadRootPath], true);
    }

    get payloadPath() {
        const { payloadRootPath } = defaultContainer.moduleOptions
        return getPath([process.cwd(), payloadRootPath, 'payload'], true);
    }

    get rootPath() {
        return this.commonPath.cachePath;
    }

    get routesJsonPath() {
        return this.commonPath.routesJsonPath;
    }

    get robotsTxtPath() {
        return getPath([this.publicFolder, "robots.txt"]);
    }

    get redirectRoutesJsonPath() {
        return this.commonPath.redirectRoutesJsonPath;
    }

    get sitemapJsonPath() {
        return getPath([this.rootPath, "sitemap.json"]);
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