import { BACKSLASH, BLANK, CSS, DIST, DOT, HTML, JS, JSON, RIGHTSLASH, SERVICE_WORKER_JS } from "../../const/core.const";
import { getChecksum } from "./get-checksum";

export async function getFilesChecksum(files:Array<string>){
    const jObject:any={scripts:{},styles:{},json:{},html:{}};
    for(const filePath of files){
      var file:any = filePath;
      file = file.split(DIST).pop().replace(BACKSLASH,RIGHTSLASH)
      var extension = file.split(DOT).pop();
      switch(extension){
        case JS:
          if(file !== SERVICE_WORKER_JS)
          jObject.scripts[`/${file}`] = await getChecksum(filePath)
          break;
        case CSS:
          jObject.styles[`/${file}`] = await getChecksum(filePath)
          break;
          case HTML:
          file = file.replace("\\index.html",BLANK).replace("/index.html",BLANK).replace("index.html",BLANK).replace("index",BLANK)
          jObject.html[`/${file}`] = await getChecksum(filePath)
          break;
        case JSON:
          jObject.json[`/${file}`] = await getChecksum(filePath)
          break;
      }
    }
    return jObject;
  }