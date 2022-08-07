export function dynamicRouteCodeTemplate(routes:{[key:string]:string}){
    return `  export default function(registerDynamicRoute){
        registerDynamicRoute(${JSON.stringify(routes)})
    }    `;
}