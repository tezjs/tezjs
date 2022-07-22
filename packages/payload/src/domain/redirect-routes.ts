import { readFileSync } from "@tezjs/common";
import { writeFileSync } from "../utils/write-file";
import { PathResolver } from "./path-resolver";

export class RedirectRoute{
    routes:any[];
    pathResolver:PathResolver;
    constructor(){
        this.routes = [];
        this.pathResolver = new PathResolver();
        this.routes = readFileSync(this.pathResolver.redirectRoutesJsonPath) as any[] || [];
    }

    add(page:any){
        if(page && page.redirectRoutes&& Array.isArray(page.redirectRoutes))
            page.redirectRoutes.forEach(item=>{ if(item.from && item.statusCode) this.routes.push({...item,...{to:page.url}})})
    }
    save(){
        writeFileSync(this.pathResolver.redirectRoutesJsonPath,this.routes)
    }
}