import { CommonPathResolver,getPath,commonContainer } from "@tezjs/common"

export class PathResolver {
    private commonPath:CommonPathResolver;
    private payloadRootPath:string = '';
     
    constructor(){
        this.commonPath = new CommonPathResolver();
        this.payloadRootPath = commonContainer.getStrapiConfig().payloadRootPath;
    }
    get publicFolder() {
        return getPath([commonContainer.buildOptions.rootDir, this.payloadRootPath], true);
    }

    get payloadPath() {
        return getPath([this.publicFolder, 'payload'], true);
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

    pathExists(path:string){
        return this.commonPath.pathExists(path);
    }
}