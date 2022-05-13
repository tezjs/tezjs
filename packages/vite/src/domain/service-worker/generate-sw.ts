import * as fs from "fs";
import {writeFileSync,  readFileSync, commonContainer } from "@tezjs/common"
import { REGISTER_SERVICE_WORKER_JS_PATH, SERVICE_WORKER_JS_PATH } from "../../const/core.const";
import { getPaths } from "../../functions/get-paths";
import { minifyJs } from "../../functions/minify-js";
import { getFilesChecksum } from "./get-files-checksum";
export async function generateSW(){
      if(fs.existsSync('./dist')){
          var files = getPaths('./dist','');
          var jObject = await getFilesChecksum(files)
          var code = `const assets = {
            scripts:${JSON.stringify(jObject.scripts)},
            styles:${JSON.stringify(jObject.styles)},
            html:${JSON.stringify(jObject.html)},
            json:${JSON.stringify(jObject.json).replace(/\\/g, "/").replace(new RegExp("//","g"), "/")}
            };`
            var swScript = readFileSync(SERVICE_WORKER_JS_PATH(),true);
            var registerSW = readFileSync(REGISTER_SERVICE_WORKER_JS_PATH(),true);
            writeFileSync('./dist/registerSW.js',minifyJs(registerSW as string),true);
            writeFileSync('./dist/sw.js',minifyJs(`${code}${swScript}` as string),true);
            if(commonContainer.tezConfig.pwa)
                  writeFileSync('./dist/manifest.json',commonContainer.tezConfig.pwa);
      }
}