import * as fs from 'fs';
import * as  axios from 'axios';
import {CommonPathResolver, commonContainer } from "@tezjs/common";
const pathResolver = new CommonPathResolver();
export async function writeImage(imagePath:string){
    return new Promise(async (resolve, reject) => {
            try {
                if(!pathResolver.pathExists(`${pathResolver.imageFolderPath}${imagePath}`)){
                    const response = await getImage(imagePath)
                    const writer = fs.createWriteStream(`${pathResolver.imageFolderPath}${imagePath}`);
                    writer.on("error", (err) => {
                        console.log("downloadFileFn writer error called → ", err);
                        error = err;
                        writer.close();
                        resolve(true);
                    });
                    writer.on("close", () => {
                        if (!error) {
                            resolve(true);
                        }
                    });
                    response.data.pipe(writer);
                    let error = null;
                }else{
                    resolve(true)
                }
            } catch (err) {
                console.log(err)
                reject(err);
            }
    });
}

async function getImage(imageUrl:string){
    return await axios({
        method: "get",
        url: `${commonContainer.tezConfig.strapi.apiUri}${imageUrl}`,
        responseType: "stream",
    });
}