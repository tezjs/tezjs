import { defaultContainer } from "../const/core.const";

export function toCamelCase(value: string) {
    if (defaultContainer.moduleOptions.serializeJson.isCamelCase)
        return value.length > 1 ? `${value.charAt(0).toLowerCase()}${value.substr(1, value.length)}` : value.toLowerCase();
    return value;
}