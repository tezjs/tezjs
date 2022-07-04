import { jsContainer } from "../const/container.const";

export function run(eventName:any){
    let called:boolean = false;
    const process =(event:any)=>{
        if(!called){
            called = true;
            document.removeEventListener(eventName, process);
            jsContainer.config.afterInteration.funcs.forEach(func=>func());
        }
    } 
    return process; 
}