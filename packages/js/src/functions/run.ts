export function run(funcs:Function[],eventName:any){
    let called:boolean = false;
    const process =(event:any)=>{
        if(!called){
            called = true;
            document.removeEventListener(eventName, process);
            funcs.forEach(func=>func());
        }
    } 
    return process; 
}