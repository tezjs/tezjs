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

export const SERVICE_WORKER_JS_PATH = ()=> getPath([commonContainer.buildOptions.rootDir,"node_modules","@tezjs","vite","templates","sw._js"],false)

export const REGISTER_SERVICE_WORKER_JS_PATH = ()=> getPath([commonContainer.buildOptions.rootDir,"node_modules","@tezjs","vite","templates","registerSW._js"],false)

export const TEZJS_PATH="assets/tez.js";
export const TEZCSS_PATH="assets/tez.css";
