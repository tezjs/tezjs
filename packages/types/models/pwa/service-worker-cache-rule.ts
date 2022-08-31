export interface ServiceWorkerCacheRule{
    immutable?:{
        images?:boolean;
    },
    originCacheRules?:RegExp[];
}