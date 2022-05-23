import { commonContainer} from '@tezjs/common';
import * as express from 'express'
import { appContainer } from '../../const/container.const';
import { getHtmlTemplate } from '../html/get-html-template';


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
           await appContainer.addOrUpdateTezTS();
            if(!this.htmlCache)
                 this.htmlCache = getHtmlTemplate(commonContainer.tezConfig.htmlMeta);
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