import { defaultContainer } from "../const/core.const";

export default function urlReplacer(value:string) {
    if (typeof value === "string" && value.indexOf('https://')) {
        if (defaultContainer.moduleOptions.media.cdnUri && defaultContainer.moduleOptions.media.uris.length > 0) {
            const imageHostUris = typeof defaultContainer.moduleOptions.media.uris === "string" ? JSON.parse(defaultContainer.moduleOptions.media.uris) : defaultContainer.moduleOptions.media.uris;
            const cdnHost = defaultContainer.moduleOptions.media.cdnUri;
            imageHostUris.forEach(host => {
                value = value.replace(host, cdnHost)
            })
        }
    }
    return value;
}