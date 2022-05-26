import { getCurrentUrl } from "./get-current-url";
import {getUrl as baseGetUrl} from '../get-url'
export  function getUrl(baseUrl?:string) {
    const url = baseUrl || getCurrentUrl();
    return baseGetUrl(url);
}