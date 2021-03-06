import * as express from 'express'
import { commonContainer } from '@tezjs/common';
import { refreshData } from '../../functions/refresh-data';

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
      await refreshData(request.query?.path)
      response.status(200).end();
    }

    private resolveConfig(){
      this.tezConfig = commonContainer.tezConfig;
    }
}
export default RoutesRouter;