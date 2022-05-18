import { existsSync } from "fs";
import { CACHE_PATH } from "../const/app.const";
import { commonContainer } from "../const/container.const";
import { getPath } from "../functions/get-path";
import { removePath } from "../functions/remove-path";
export class CommonPathResolver {
    private payloadRootPath:string = '';
    constructor(){
        this.payloadRootPath = commonContainer.getStrapiConfig().payloadRootPath;
    }

    get indexHtmlPath(){
        return `${commonContainer.buildOptions.rootDir}\\index.html`
    }

    get rootPath() {
        return getPath([commonContainer.buildOptions.rootDir],true)
    }

    get publicFolder() {
        return getPath([commonContainer.buildOptions.rootDir, this.payloadRootPath], true);
    }

    get cachePath() {
        return getPath([commonContainer.buildOptions.rootDir, CACHE_PATH],true)
    }

    

    get clientEnvPath() {
        return getPath([this.cachePath, "client-env.ts"]);
    }

    get tezTsPath() {
        return getPath([this.cachePath, "tez.ts"]);
    }

    get serverEnvPath() {
        return getPath([this.cachePath, "server-env.ts"]);
    }

    get addLibPath() {
        return `${commonContainer.buildOptions.rootDir}\\add-lib.ts`;
    }

    get routesJsonPath() {
        return getPath([this.cachePath, "routes.json"]);
    }

    get redirectRoutesJsonPath() {
        return getPath([this.cachePath, "redirect-routes.json"]);
    }

    get payloadPath() {
        return getPath([this.publicFolder, 'payload'], true);
    }

    get imageFolderPath(){
        getPath([this.publicFolder,'\\uploads'],true)
        return this.publicFolder;
    }

    get storePath(){
        return `${commonContainer.buildOptions.rootDir}\\store\\index.ts`
    }

    get routerPath(){
        return `${commonContainer.buildOptions.rootDir}\\router\\index.ts`
    }

    get layoutsPath(){
        return `${commonContainer.buildOptions.rootDir}\\layouts`
    }

    get componentsPath(){
        return `${commonContainer.buildOptions.rootDir}\\layouts`
    }

    get pluginsPath(){
        return `${commonContainer.buildOptions.rootDir}\\plugins\\index.ts`
    }

    getExistsFilesOrFolders(){
        return {
            components:this.pathExists(this.componentsPath),
            layouts:this.pathExists(this.layoutsPath),
            router:this.pathExists(this.routerPath),
            store:this.pathExists(this.storePath),
            addLib:this.pathExists(this.addLibPath),
            useVue:this.pathExists(this.pluginsPath),
        }
    }

    pathExists(filePath:string){
        return existsSync(filePath);
    }

    removeDirSync(path:string){
        removePath(path);
    }
    
}