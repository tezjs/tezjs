import { getCurrentUrl } from "./get-current-url";

export  function getUrl(baseUrl?:string) {
    const url = baseUrl || getCurrentUrl();
    return url === "/" ? "/index" : url === "/index" ? "/" : url;
}