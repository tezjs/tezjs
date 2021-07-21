export function readProp(jObject: { [key: string]: any },props:string[]) {
    let value = '';
    if (jObject) {
        const objectProps = Object.keys(jObject);
        for (const prop of objectProps) {
            var isExits = props.filter(x => x === prop.toLowerCase())[0];
            if (isExits) {
                value = jObject[prop];
                break;
            }
        }
    }
    return value;
}