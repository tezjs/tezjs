import { isMobile } from "./is-mobile";
import { run } from "./run";

export function subscribe(funcs:Function[]){
    return ()=>{
        let eventName:any = isMobile()?"touchstart":"mouseover";
        document.addEventListener(eventName, run(funcs,eventName), { passive: true });
    }
}