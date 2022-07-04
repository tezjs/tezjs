import { isMobile } from "./is-mobile";
import { run } from "./run";

export function subscribe(){
    return ()=>{
        let eventName:any = isMobile()?"touchstart":"mouseover";
        document.addEventListener(eventName, run(eventName), { passive: true });
    }
}