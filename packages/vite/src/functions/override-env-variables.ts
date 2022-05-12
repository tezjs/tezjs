import { loadEnv } from 'vite'
export async function overrideEnvVariables(mode:string,envFolderName:string){
    var environmentVariables = await loadEnv(mode, `${process.cwd()}\\${envFolderName}`);
    process.env = {...process.env,...environmentVariables };
}