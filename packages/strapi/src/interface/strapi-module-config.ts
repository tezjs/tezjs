import { CollectionResultQueryConfig } from "./collection-result-query-config";
import { MediaConfig } from "./media-config";
import { OptimizationConfig } from "./optimization-config";
import { PageCollectionConfig } from "./page-collection-config";
import { PaginationConfig } from "./pagination-config";
import { PayloadConfig } from "./payload-config";
import { RobotsConfig } from "./robots.config";
import { SerializeJsonConfig } from "./serialize-json-config";
import { UserCredential } from "./user-credential-config";

export interface StrapiModuleConfig {
    version?:number;
    apiUri: string;
    isDev: boolean;
    payloadRootPath?: string;
    componentNames?: { [key: string]: string } | Array<string>;
    pageCollectionConfig?: PageCollectionConfig;
    media: MediaConfig;
    ignoreColumns?: Array<string>;
    collectionQuery?: CollectionResultQueryConfig;
    componentDataFieldSelectors?: { [key: string]: any };
    limit?: number;
    siteUrl?: string;
    serializeJson?: SerializeJsonConfig;
    userCredential?: UserCredential;
    enableInternationalization?: boolean;
    optimization: OptimizationConfig;
    pagination: PaginationConfig;
    payload:PayloadConfig;
    robots?:RobotsConfig;
}