import { CollectionResultQueryConfig } from "./collection-result-query-config";
import { CustomPayloadGenratorConfig } from "./custom-payload-generator-config";
import { MediaConfig } from "./media-config";
import { OptimizationConfig } from "./optimization-config";
import { PageCollectionConfig } from "./page-collection-config";
import { PaginationConfig } from "./pagination-config";
import { RobotsConfig } from "./robots.config";
import { SerializeJsonConfig } from "./serialize-json-config";
import { UserCredential } from "./user-credential-config";

export interface StrapiModuleConfig {
    customPayloadGenerator:(config:CustomPayloadGenratorConfig)=>Promise<void>;
    version?:number;
    apiUri?: string;
    isDev?: boolean;
    payloadRootPath?: string;
    componentNames?: { [key: string]: string } | Array<string>;
    pageCollectionConfig?: PageCollectionConfig;
    media?: MediaConfig;
    ignoreColumns?: Array<string>;
    collectionQuery?: CollectionResultQueryConfig;
    componentDataFieldSelectors?: { [key: string]: any };
    limit?: number;
    siteUrl?: string;
    serializeJson?: SerializeJsonConfig;
    userCredential?: UserCredential;
    enableInternationalization?: boolean;
    optimization?: OptimizationConfig;
    pagination?: PaginationConfig;
    robots?:RobotsConfig;
}