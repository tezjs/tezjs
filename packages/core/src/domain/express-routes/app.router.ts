import * as express from 'express'

import { RouterModel } from "../../interface/router.model";

export class AppRouter {
    app:express.Application = express();

    constructor(private routers:RouterModel[],public vite:any){
        
    }

   async setup(){
        
        this.app.use(this.vite.middlewares);

        this.routers.forEach(router=>{
            this.app.use(router.router)
        })

        return {app:this.app,vite:this.vite}
    }


}