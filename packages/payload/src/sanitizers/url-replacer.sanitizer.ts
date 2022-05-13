import { IMAGE_EXTENSION_REGEX } from "../const/app.const";
import { defaultContainer } from "../const/core.const";
import { commonContainer } from "@tezjs/common"
export default function urlReplacer(value:string,columnName?:string) {
    if (typeof value === "string" && value.indexOf('https://') !== -1) {
        let strapiConfig = commonContainer.getStrapiConfig();
        if (strapiConfig.media.cdnUri && strapiConfig.media.uris.length > 0) {
            const imageHostUris = typeof strapiConfig.media.uris === "string" ? JSON.parse(strapiConfig.media.uris) : strapiConfig.media.uris;
            const cdnHost = strapiConfig.media.cdnUri;
            imageHostUris.forEach(host => {
                value = value.replace(host, cdnHost)
            })
        }
    }else{
        if(typeof value === "string" && IMAGE_EXTENSION_REGEX.test(value) && columnName == "url")
            defaultContainer.writeImageUris.push(value)
    }
    return value;
}