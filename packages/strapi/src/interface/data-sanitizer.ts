export interface DataSanitizer{
    toPass?(url:string,componentName:string,parentComponentName:string):boolean;
    sanitizer:Function;
}