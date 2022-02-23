export function getPropName(jObject: { [key: string]: any },props:string[]) {
    let value = null;
    if (jObject) {
        const objectProps = Object.keys(jObject);
        for (const prop of objectProps) {
            var isExits = props.filter(x => x === prop.toLowerCase())[0];
            if (isExits) {
                value = prop;
                break;
            }
        }
    }
    return value;
}