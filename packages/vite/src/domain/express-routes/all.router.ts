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
            
            // if(!this.htmlCache)
            //     this.htmlCache = fs.readFileSync(resolvePath('index.html'), 'utf-8')
            response.status(200).set({ 'Content-Type': 'text/html' }).end(
`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/tez.ts"></script>
  </body>
</html>
`

            )
        } catch (e) {
          this.vite && this.vite.ssrFixStacktrace(e)
          console.log(e.stack)
          response.status(500).end(e.stack)
        }
      response.status(200).end();
    }
}
export default AllRouter;