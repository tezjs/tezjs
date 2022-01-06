export interface DataSanitizer{
    componentName?:string
    urlPattern?:RegExp;
    sanitizer:Function;
}