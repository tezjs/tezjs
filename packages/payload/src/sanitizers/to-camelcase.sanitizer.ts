import { defaultContainer } from "../const/core.const";
import { commonContainer } from "@tezjs/common"
export function toCamelCase(value: string) {
    const serializer = commonContainer.getStrapiConfig().serializeJson;

    if (serializer == undefined || commonContainer.getStrapiConfig().serializeJson.isCamelCase)
        return value.length > 1 ? `${value.charAt(0).toLowerCase()}${value.substr(1, value.length)}` : value.toLowerCase();
    return value;
}