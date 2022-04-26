import * as express from 'express'
import { PageCollection } from "@tezjs/payload"
import { commonContainer } from '@tezjs/common';

export class RoutesRouter{
    public path = '/routes';
    public router = express.Router();
    public tezConfig:any = undefined;
    constructor(){
      this.initializeRoutes();
      this.resolveConfig();
    }

    initializeRoutes(){
      this.router.get(this.path,this.get);
    }

    get = async (request:express.Request,response:express.Response) => {
      const pageCollection = new PageCollection(this.tezConfig.strapi);
      await pageCollection.generate();
      response.status(200).end();
    }

    private resolveConfig(){
      this.tezConfig = commonContainer.tezConfig;
    }
}
export default RoutesRouter;