export function getGenericSections(masterPage:any,genericCollection:any[]){
    let collection:any[] = [];
    let pre = masterPage && masterPage.pre && Array.isArray(masterPage.pre) ? masterPage.pre :[];
    let post = masterPage && masterPage.post && Array.isArray(masterPage.post) ? masterPage.post :[];
    pre.forEach(item=>collection.push(item));

    if(genericCollection && Array.isArray(genericCollection))
        genericCollection.forEach(item=>collection.push(item));
    
    post.forEach(item=>collection.push(item));

    return collection;
}