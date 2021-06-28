import { Route } from "./route";

export interface PageRouteResponse {
    routes: Array<Route>;
    dynamicPageRoute: { [key: string]: any };
}