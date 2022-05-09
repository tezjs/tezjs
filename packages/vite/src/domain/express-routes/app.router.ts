import express from 'express'
import { RouterModel } from "../../interface/router.model";
import { commonContainer } from "@tezjs/common"
export class AppRouter {
    app:express.Application = express();

    constructor(private routers:RouterModel[],public vite:any){
        
    }

   async setup(){
        
        this.app.use(this.vite.middlewares);

        if(commonContainer.expressConfig && commonContainer.expressConfig.routes)
            this.app.use(commonContainer.expressConfig.routes)

        this.routers.forEach(router=>{
            this.app.use(router.router)
        })
        
        
        return {app:this.app,vite:this.vite}
    }


}