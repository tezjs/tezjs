import * as express from 'express'
import * as fs from 'fs'
import { resolvePath } from '../../functions/resolve-path';


export class AllRouter{
    public path = '*';
    public router = express.Router();
    public htmlCache:string = undefined;

    constructor(private vite:any){
      this.initializeRoutes();
      
    }

    initializeRoutes(){
      this.router.get(this.path,this.get);
    }

    get = async (request:express.Request,response:express.Response)=>{
        try {
            
            if(!this.htmlCache)
                this.htmlCache = fs.readFileSync(resolvePath('index.html'), 'utf-8')
            response.status(200).set({ 'Content-Type': 'text/html' }).end(this.htmlCache)
        } catch (e) {
          this.vite && this.vite.ssrFixStacktrace(e)
          console.log(e.stack)
          response.status(500).end(e.stack)
        }
      response.status(200).end();
    }
}
export default AllRouter;