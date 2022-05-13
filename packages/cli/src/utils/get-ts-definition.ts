export function tsDefinition(value:any){
    const definition:string =  /^(true|false)+$/i.test(value) ? "boolean" : /^[0-9]+$/.test(value) ? "number" : "string";
    const transformValue = definition === "boolean" ? Boolean(value) : definition === "number" ? Number(value) : value;
    return {definition,transformValue};
}