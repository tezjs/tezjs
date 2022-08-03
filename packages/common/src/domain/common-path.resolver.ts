import { existsSync } from "fs";
import { CACHE_PATH } from "../const/app.const";
import { commonContainer } from "../const/container.const";
import { getPath } from "../functions/get-path";
import { removePath } from "../functions/remove-path";
import * as path from "path";
import { deleteFile } from "../functions/delete-file";
export class CommonPathResolver {

    get indexHtmlPath(){
        return getPath([commonContainer.buildOptions.rootDir,"index.html"],false);
    }

    get rootPath() {
        return getPath([commonContainer.buildOptions.rootDir],true)
    }

    get publicFolder() {
        return getPath([commonContainer.buildOptions.rootDir, 'public'], true);
    }

    get cachePath() {
        return getPath([commonContainer.buildOptions.rootDir, CACHE_PATH],true)
    }

    get depsPath() {
        return getPath([this.cachePath, "deps"],true)
    }

    get distPath(){
        return getPath([this.rootPath,"dist"],false)
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
        return getPath([commonContainer.buildOptions.rootDir,"add-lib.ts"],false)
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
        getPath([this.publicFolder,'uploads'],true)
        return this.publicFolder;
    }

    get storePath(){
        return getPath([commonContainer.buildOptions.rootDir,"store","index.ts"],false)
    }

    get routerPath(){
        return getPath([commonContainer.buildOptions.rootDir,"router","index.ts"],false)
    }

    get layoutsPath(){
        return getPath([commonContainer.buildOptions.rootDir,commonContainer.tezConfig.sourceCodePath,"layouts"],false)
    }

    get componentsPath(){
        return getPath([commonContainer.buildOptions.rootDir,commonContainer.tezConfig.sourceCodePath,"components"],false)
    }

    get pluginsPath(){
        return getPath([commonContainer.buildOptions.rootDir,commonContainer.tezConfig.sourceCodePath,"plugins","index.ts"],false)
    }

    get pagesPath(){
        return getPath([commonContainer.buildOptions.rootDir,commonContainer.tezConfig.sourceCodePath,"pages"],false)
    }

    get tzJsPath(){
        return getPath([this.distPath,"tz.js"],false);
    }

    getExistsFilesOrFolders(){
        return {
            components:this.pathExists(this.componentsPath),
            layouts:this.pathExists(this.layoutsPath),
            router:this.pathExists(this.routerPath),
            store:this.pathExists(this.storePath),
            addLib:this.pathExists(this.addLibPath),
            useVue:this.pathExists(this.pluginsPath),
            pages:this.pathExists(this.pagesPath)
        }
    }

    pathExists(filePath:string){
        return existsSync(filePath);
    }

    removeDirSync(path:string){
        removePath(path);
    }

    deleteFile(path:string){
        deleteFile(path);
    }

    getPath(path:Array<string>){
        return getPath(path,true)
    }
    getFilePath(directories:Array<string>,fileName:string){
        return path.join(getPath(directories),fileName)
    }
    
}