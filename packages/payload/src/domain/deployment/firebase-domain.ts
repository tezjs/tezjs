import { isObject,writeFileSync } from "@tezjs/common";
import { FIRE_BASE_CONFIG } from "../../const/firebase";
import { BaseDeployment } from "./base-deployment";

export class FirebaseDomain extends BaseDeployment{
    
    constructor(){
        super();
    }
    create(firebase:{[key:string]:any} | boolean,redirectRoutes:Array<{from:string,to:string;statusCode:number}>)
    {
        let firebaseConfig = firebase;
        if(isObject(firebase)){
            firebaseConfig = firebase;
        }else
            firebaseConfig = FIRE_BASE_CONFIG;
        this.addRedirects(<{[key:string]:any}>firebaseConfig,redirectRoutes)
        writeFileSync(this.pathResolver.firebaseConfigPath,firebaseConfig);
    }

    addRedirects(firebase:{[key:string]:any},redirectRoutes:Array<{from:string,to:string;statusCode:number}>){
        if(firebase.hosting && !firebase.hosting.redirects)
            firebase.hosting.redirects = [];
        if(redirectRoutes.length > 0 && Array.isArray( firebase.hosting.redirects)){
            redirectRoutes.forEach(route =>{
                firebase.hosting.redirects.push( {
                    "source": route.from,
                    "destination": route.to,
                    "type": route.statusCode
                })
            })
        }
    }
}