import { commonContainer } from "@tezjs/common";

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


export const SERVICE_WORKER_JS_PATH = ()=> `${commonContainer.tezConfig.rootDir}\\node_modules\\@tezjs\\vite\\templates\\sw._ts`

export const REGISTER_SERVICE_WORKER_JS_PATH = ()=> `${commonContainer.tezConfig.rootDir}\\node_modules\\@tezjs\\vite\\templates\\registerSW._ts`

