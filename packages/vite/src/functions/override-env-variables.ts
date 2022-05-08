export async function overrideEnvVariables(mode:string,envFolderName:string){
    var environmentVariables = await require('vite').loadEnv(mode, `${process.cwd()}\\${envFolderName}`);
    process.env = {...process.env,...environmentVariables };
}