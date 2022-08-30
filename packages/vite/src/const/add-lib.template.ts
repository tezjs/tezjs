import { commonContainer } from "@tezjs/common";

export function getAddLib(isAddLib:boolean){
    let codes:Array<string> = new Array<string>();
    if(commonContainer.tezConfig.pwa || isAddLib){
        codes.push(`let CACHE_ASSETS=[]; `)
        if(commonContainer.tezConfig.pwa){
            codes.push(`import { addPreCacheAssets } from '@tezjs/vue'; `)
            codes.push(`CACHE_ASSETS = [addPreCacheAssets];`)
        }
        if(isAddLib){
            codes.push(`import addLib from '/@/add-lib';`);
            codes.push(` addLib({afterUserInteraction:CACHE_ASSETS});`);
        }
        else{
            codes.push(`import { addLib } from '@tezjs/js';`);
            codes.push(` addLib({afterUserInteraction:CACHE_ASSETS})();`);
        }
    }
    return codes.join("\n");
}