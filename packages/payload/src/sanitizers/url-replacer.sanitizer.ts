import { IMAGE_EXTENSION_REGEX } from "../const/app.const";
import { defaultContainer } from "../const/core.const";

export default function urlReplacer(value:string,columnName?:string) {
    if (typeof value === "string" && value.indexOf('https://') !== -1) {
        if (defaultContainer.moduleOptions.media.cdnUri && defaultContainer.moduleOptions.media.uris.length > 0) {
            const imageHostUris = typeof defaultContainer.moduleOptions.media.uris === "string" ? JSON.parse(defaultContainer.moduleOptions.media.uris) : defaultContainer.moduleOptions.media.uris;
            const cdnHost = defaultContainer.moduleOptions.media.cdnUri;
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