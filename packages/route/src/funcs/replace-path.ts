export function replacePath(path:string){
    let texts = {'_':":",'/index.vue':"",'.vue':""};
    for (const [key, value] of Object.entries(texts)) 
        path = path.replace(new RegExp(key,"g"),value);
        return path;
    }