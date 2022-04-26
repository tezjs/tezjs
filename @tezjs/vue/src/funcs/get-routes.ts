export function getRoutes(routes:any,pageComponent:any){
    if(!routes)
        routes = [];
    routes.push({ path: '/:pathMatch(.*)*', component: pageComponent });
    return routes;
}