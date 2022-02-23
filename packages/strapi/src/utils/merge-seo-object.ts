export function mergeSeoObject(objects:any[]){
    let jObject:any = {};
    for(let i=objects.length;i>1;i--){
        let topObject = objects[i-1]
        let bottomObject = objects[i-2];
        jObject.title = topObject.title;
        jObject.description = topObject.description
        if(!topObject.title && bottomObject.title && !jObject.title)
            jObject.title = bottomObject.title;
        else if(topObject.title)
            jObject.title = topObject.title;
        if(!topObject.description && bottomObject.description && !jObject.description)
            jObject.description = bottomObject.description;
        else if(topObject.description)
            jObject.description = topObject.description;
        if(!jObject.sitemap)
            jObject.sitemap = {};
        if((!topObject.sitemap) && (bottomObject.sitemap && bottomObject.sitemap.changeFrequency) && !jObject.sitemap.changeFrequency)
            jObject.sitemap.changeFrequency = bottomObject.sitemap.changeFrequency;
        else if((topObject.sitemap && topObject.sitemap.changeFrequency))
            jObject.sitemap.changeFrequency = topObject.sitemap.changeFrequency;
        
        if((!topObject.sitemap) && (bottomObject.sitemap && bottomObject.sitemap.priority !== undefined ) && jObject.sitemap.priority === undefined)
            jObject.sitemap.priority = bottomObject.sitemap.priority;
        else if((topObject.sitemap && topObject.sitemap.priority !== undefined))
            jObject.sitemap.priority = topObject.sitemap.priority;
        
        setMetaTags(topObject.metaTags,jObject)
        setMetaTags(bottomObject.metaTags,jObject)
        }
    return jObject;
}

function setMetaTags(metaTags:any[],jObject:any){
    if(metaTags){
        if(!jObject.metaTags)
            jObject.metaTags = [];
        let metas = jObject.metaTags;
        metaTags.forEach(meta=>{
            let metaTag = metas.filter(t=>t.key === meta.key)[0];
            if(!metaTag)
                metas.push(meta)
        })
    }
    
}