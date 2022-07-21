export interface RouteComponent{
    pre:Array<string>;
    post:Array<string>;
    deps?:{
        pre:Array<string>;
        post:Array<string>;
    }
}