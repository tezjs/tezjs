import { getPayloadPath } from "./get-payload-url";
import { getUrl } from "./get-url";

export async function getJsonPayload(name?:string,refUrl?:string){
    const url:string = getUrl(refUrl);
    const fileName:string = name? name : url.split('/').pop() as string
    const response = await fetch(getPayloadPath(`${url}/${fileName}.json`));
    const data = await response.json();
    return data;
}