import { readFileSync } from "../functions/read-file-sync";
import { CommonPathResolver } from "./common-path.resolver";

export class PayloadReader{
    private commonPath:CommonPathResolver;
    readPayloadFile  = (path:string,name:string)=> readFileSync(`${this.commonPath.payloadPath}\\${path}\\${name}.json`);
    readMasterPage = (masterPageName:string)=> readFileSync(`${this.commonPath.payloadPath}\\master-pages\\${masterPageName}.json`);

    constructor(){
        this.commonPath = new CommonPathResolver();
    }
}