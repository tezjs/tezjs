import { defaultContainer } from "../const/core.const";
import { RobotsConfig } from "../interface/robots.config";
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
        this.robotsConfig = defaultContainer.moduleOptions.robots
    }

    async generate(){
        if(this.robotsConfig){
            const result = await this.request.get(`/robots?${getFilterQueryParams({Environment:this.robotsConfig.environmentName})}`);
            const item = result &&  result[0] ? result[0] : undefined;
            if(item)
                writeFileSync(this.pathResolver.robotsTxtPath,item.rules,true);
        }
    }
}