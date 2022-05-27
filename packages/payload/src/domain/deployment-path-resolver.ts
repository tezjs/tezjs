import { CommonPathResolver, getPath } from "@tezjs/common"

export class DeploymentPathResolver {
    private commonPath:CommonPathResolver;
    constructor(){
        this.commonPath = new CommonPathResolver();
        
    }

    get firebaseConfigPath() {
        return getPath([this.commonPath.rootPath, "firebase.json"]);
    }

    get redirectRoutesJson(){
        return this.commonPath.redirectRoutesJsonPath;
    }
    
}