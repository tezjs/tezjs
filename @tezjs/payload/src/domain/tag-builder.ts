import { CANONICAL, CHARSET, DESCRIPTION, KEYWORDS, NAME, PROPERTY } from "../const/app.const";
import { defaultContainer } from "../const/core.const";

export default function tagBuilder(data, tag) {
    const imageCdn = defaultContainer.moduleOptions.media.cdnUri;
    const siteUrl = defaultContainer.moduleOptions.siteUrl;
    if (data.PageSchema)
        tag.PageSchema = data.PageSchema;
console.log(data)
    if(data.metaTags)
        {
            tag.metaTag = {};
            data.metaTags.forEach(meta=>{
                let typeName = meta.type.toLowerCase();
                if(!tag.metaTag[typeName])
                    tag.metaTag[typeName] = {};
                tag.metaTag[typeName][meta.key] = meta.value
            })
        }
    if (data.MetaTitle || data.title)
        tag.title = data.MetaTitle || data.title;

    if(data.description)
    {
        if(!tag.metaTag)
            tag.metaTag = {name:{}};
        if(!tag.metaTag.name)
            tag.metaTag.name = {};
        tag.metaTag["name"]["description"] = data.description;
    }
    if (data.MetaDescription)
        tag.MetaNameTags.push({ type: NAME, title: DESCRIPTION, content: data.MetaDescription|| data.description });

    if (data.MetaKeywords || data.keywords)
        tag.MetaNameTags.push({ type: NAME, title: KEYWORDS, content: data.MetaKeywords || data.keywords});

    if (data.LinkTags)
        data.LinkTags.forEach(t => {
            tag.canonical = siteUrl + t.Href;
        });

    if (data.MetaNameTag)
        data.MetaNameTag.forEach(t => {
            if (t.Content && t.Name) {
                tag.MetaNameTags.push({ type: NAME, title: t.Name.Title, content: t.Content });
            }
        });


    if (data.CharSetTag && data.CharSetTag.CharSet)
        tag.MetaNameTags.push({ type: CHARSET, content: data.CharSetTag.CharSet.Title });

    if (data.MetaPropertyTag)
        data.MetaPropertyTag.forEach(t => {
            if (t.Content && t.Property)
                tag.MetaPropertyTags.push({ type: PROPERTY, title: t.Property.Title, content: t.Content });
        });

    if (data.MetaNameImageTag)
        data.MetaNameImageTag.forEach(t => {
            if (t.Content && t.Name)
                tag.MetaNameTags.push({ type: NAME, title: t.Name.Title, content: `${imageCdn}${t.Content.name}` });
        });

    if (data.MetaPropertyImageTag)
        data.MetaPropertyImageTag.forEach(t => {
            if (t.Content && t.Property)
                tag.MetaNameTags.push({ type: PROPERTY, title: t.Property.Title, content: `${imageCdn}${t.Content.name}` });
        });

    
}