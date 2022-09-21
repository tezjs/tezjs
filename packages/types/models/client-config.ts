export interface ClientConfig {
    imports?:string[];
    loaderImage?:string;
    preCache?:{
        route?: boolean | RegExp
    }
}