import { commonContainer, getPath } from "@tezjs/common";

export const NAME:string = "name";
export const PROPERTY:string = "property"


export const APP_ROOT_PATH:string  = process.cwd();

export const BLANK:string  = "";

export const ENVIRONMENTS:string  = "environments";

export const DIST:string  = "dist\\";

export const BACKSLASH:string  = '\\';

export const RIGHTSLASH:string = '/';

export const DOT:string = '.';

export const SERVICE_WORKER_JS = "sw.js";

export const JS:string = 'js';

export const CSS:string = 'css';

export const HTML:string = 'html';

export const JSON:string = 'json';

export const ENCODING_UTF:string = 'utf-8';

export const CLIENT_ENV_SUBSTRING:string  = "client_";

export const SERVICE_WORKER_JS_PATH = ()=> <any>(process.env).TEZ_DEVELOPMENT == 1 ?  getPath([process.cwd(),"packages","vite", "templates","service-worker.ts"],false) : getPath([commonContainer.buildOptions.rootDir,"node_modules","@tezjs","vite", "templates","service-worker.ts"],false)
export const TZ_JS_PATH = ()=> getPath([commonContainer.buildOptions.rootDir,"node_modules","@tezjs","vite","templates","tz-web-worker.js"],false)

export const REGISTER_SERVICE_WORKER_JS_PATH = ()=> getPath([commonContainer.buildOptions.rootDir,"node_modules","@tezjs","vite","templates","registerSW._js"],false)

export const TEZJS_PATH="assets/tez.js";
export const TEZCSS_PATH="assets/tez.css";

export const POST_SCRIPT_COMMENT = "/*POST_SCRIPT*/"

export const EXPORT_DEFAULT = "export default";

export const WINDOW_TEZ_DATA = "window.TEZ_DATA = ";

export const SERVICE_WORKER_CACHE_VERSION = "#CACHE_VERSION";
