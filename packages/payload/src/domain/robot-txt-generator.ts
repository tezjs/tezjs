import { commonContainer } from "@tezjs/common"
import { RobotsConfig } from "@tezjs/types";
import { getFilterQueryParams } from "../utils/get-filter-query-params";
import { writeFileSync } from "../utils/write-file";
import { PathResolver } from "./path-resolver";
import { RequestService } from "./request.server";

export class RobotTxtGenerator{
    private request:RequestService;
    private pathResolver:PathResolver;
    private robotsConfig:RobotsConfig;
    constructor(){
        this.request = new RequestService();
        this.pathResolver = new PathResolver();
        this.robotsConfig = commonContainer.getStrapiConfig().robots
    }

    async generate(){
        if(this.robotsConfig && !commonContainer.getStrapiConfig().customPayloadGenerator){
            const result = await this.request.get(`/robots?${getFilterQueryParams({Environment:this.robotsConfig.environmentName})}`);
            const item = result &&  result[0] ? result[0] : undefined;
            if(item)
                this.save(item.rules)
        } else if(!commonContainer.tezConfig.robots || commonContainer.tezConfig.robots[commonContainer.tezConfig.envName]){
            let text =commonContainer.tezConfig.robots && commonContainer.tezConfig.robots[commonContainer.tezConfig.envName]  ? commonContainer.tezConfig.robots[commonContainer.tezConfig.envName] : 
            `User-agent: *\nDisallow: /`
            this.save(text);
        }
    }

    save(text:string){
        if(this.robotsConfig && !commonContainer.getStrapiConfig().customPayloadGenerator){
         writeFileSync(this.pathResolver.robotsTxtPath,text,true);
    }
}