export function getScreenSize(){
    if(typeof window !== "undefined")
        return screen.width;
    return 0;
}