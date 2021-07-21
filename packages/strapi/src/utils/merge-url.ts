export function mergeUrl(rootUrl: string, childUrl: string) {
    if (rootUrl.indexOf("*") !== -1) {
        return rootUrl.replace("*", childUrl);
    }
    return childUrl;
}