import { subStringText } from "./sub-string-text";

export function getUrl(url:any) {
    return url === "/" ? "/index" : url === "/index" ? "/" : subStringText(url);
}
