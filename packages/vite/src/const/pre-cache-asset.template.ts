import { commonContainer } from "@tezjs/common"

export const preCacheAssets = (assets:Array<string>)=>{
    return `
    window.TEZ_PRE_CACHE_ASSETS={
        cacheName:"${commonContainer.buildOptions.buildVersion}",
        assets:${JSON.stringify(assets)}
    };
    `
}