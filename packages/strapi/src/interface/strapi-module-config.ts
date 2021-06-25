import { CollectionResultQueryConfig } from "./collection-result-query-config";
import { MediaConfig } from "./media-config";
import { PageCollectionConfig } from "./page-collection-config";
import { SerializeJsonConfig } from "./serialize-json-config";

export interface StrapiModuleConfig {
    apiUri: string;
    isDev: boolean;
    payloadRootPath?: string;
    componentNames: { [key: string]: string } | Array<string>;
    pageCollectionConfig?: PageCollectionConfig;
    media: MediaConfig;
    ignoreColumns?: Array<string>;
    collectionQuery?: CollectionResultQueryConfig;
    componentDataFieldSelectors?: { [key: string]: any };
    limit?: number;
    siteUrl?: string;
    serializeJson?: SerializeJsonConfig;
}