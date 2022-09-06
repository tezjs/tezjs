import { existsSync } from "fs";
import { CACHE_PATH } from "../const/app.const";
import { commonContainer } from "../const/container.const";
import { getPath } from "../functions/get-path";
import { removePath } from "../functions/remove-path";
import * as path from "path";
import { deleteFile } from "../functions/delete-file";
import { globby } from "globby";
export class CommonPathResolver {

    get indexHtmlPath(){
        return getPath([commonContainer.buildOptions.rootDir,"index.html"],false);
    }

    get sourceCodePath() {
        return getPath([this.rootPath,commonContainer.tezConfig.sourceCodePath],true)
    }

    get rootPath() {
        return getPath([commonContainer.buildOptions.rootDir],true)
    }

    get publicFolder() {
        return getPath([commonContainer.buildOptions.rootDir, 'public'], true);
    }

    get fontsPath(){
        return getPath([this.publicFolder,"fonts"],true)
    }

    get cachePath() {
        return getPath([commonContainer.buildOptions.rootDir, CACHE_PATH],true)
    }

    get dynamicRoutesPath() {
        return getPath([this.depsPath, "dynamic-routes.js"],false)
    }

    get serviceWorkerGenPath() {
        return getPath([this.depsPath, "service-worker-gen.ts"],false)
    }


    get depsPath() {
        return getPath([this.cachePath, "deps"],true)
    }

    get distPath(){
        return getPath([this.rootPath,"dist"],false)
    }

    get clientEnvPath() {
        return getPath([this.envPath, "client.ts"]);
    }

    get tezTsPath() {
        return getPath([this.cachePath, "tez.ts"]);
    }

    get serverEnvPath() {
        return getPath([this.envPath, "server.ts"]);
    }

    get addLibPath() {
        return getPath([commonContainer.buildOptions.rootDir,commonContainer.tezConfig.sourceCodePath,"add-lib.ts"],false)
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

    get manifestJsonPath(){
        return getPath([this.distPath,"manifest.json"],false);
    }

    get serviceWorkerJsPath(){
        return getPath([this.distPath,"service-worker.js"],false);
    }

    get preScriptName(){
        if(commonContainer.buildOptions.commandName === "build")
        return `pre.${commonContainer.buildOptions.buildVersion}.js`
        return 'pre.js';
    }

    get postScriptName(){
        if(commonContainer.buildOptions.commandName === "build")
        return `post.${commonContainer.buildOptions.buildVersion}.js`
        return 'post.js'
    }


    get tezJsPath(){
        if(commonContainer.buildOptions.commandName === "build")
        return `assets/tez.${commonContainer.buildOptions.buildVersion}.js`
        return 'tez.js';
    }

    get tezCSSPath(){
        return `assets/tez.${commonContainer.buildOptions.buildVersion}.css`
    }

    get preloadScriptName(){
        if(commonContainer.buildOptions.commandName === "build")
            return `preload.${commonContainer.buildOptions.buildVersion}.js`
        return 'preload.js'
    }

    getFontFilePath(fileName:string){
        return getPath([this.fontsPath,fileName],false)
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

    get envPath(){
        return getPath([this.sourceCodePath,"env"],true);
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

   

    async getFiles(folderName:string,extension:string){
        let paths = await globby([
            folderName
          ], {expandDirectories: {
            extensions: [extension]
        },cwd:this.sourceCodePath, followSymbolicLinks: true});
        return paths.map(path=>{
            return path.split(`${folderName}/`)[1].replace(`.${extension}`,"");
        })
    }
    
}