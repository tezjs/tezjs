import { DeploymentPathResolver } from "../deployment-path-resolver";

export abstract class BaseDeployment{
    protected pathResolver:DeploymentPathResolver;
    constructor(){
        this.pathResolver  = new DeploymentPathResolver();
    }

}