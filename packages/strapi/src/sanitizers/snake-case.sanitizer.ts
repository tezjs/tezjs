export default function SnakeCaseSanitizer(text: string) {
    var newText: string = '';
    text.split("").forEach((t,i) => {
        if (t === t.toUpperCase() && i != 0)
            newText += '-' + t.toLowerCase();
        else
            newText += t.toLowerCase();
    })
    return newText
}