import { commonContainer, CommonPathResolver, readFileSync } from "@tezjs/common";
import { FirebaseDomain } from "./firebase-domain";

export class DeploymentDomain{
    private firebase:FirebaseDomain;
    private commonPath:CommonPathResolver;
    private redirectRoutes:Array<{from:string,to:string;statusCode:number}> = new Array<{from:string,to:string;statusCode:number}>();
    constructor(){
        this.firebase = new FirebaseDomain();
        this.commonPath = new CommonPathResolver();
        this.redirectRoutes = readFileSync(this.commonPath.redirectRoutesJsonPath) as Array<{from:string,to:string;statusCode:number}>;
    }
    generate(){
        if(commonContainer.tezConfig.deployment){
            if(commonContainer.tezConfig.deployment.firebase)
                this.firebase.create(commonContainer.tezConfig.deployment.firebase,this.redirectRoutes);
        }
    }
}