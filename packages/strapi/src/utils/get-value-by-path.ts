export function getValueByPath(valuePath: string, entity: { [key: string]: any }) {
    const splitText = valuePath.split(".");
    var text = undefined;
    splitText.forEach(t => {
        if (!text)
            text = entity[t.replace("#", "")];
        else
            text = text[t];
    })
    return text;
}