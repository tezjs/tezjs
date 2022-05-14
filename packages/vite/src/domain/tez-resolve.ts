import { Plugin } from "vite"
import { CommonPathResolver } from '@tezjs/common'
import { TEZ_ENV_ID } from "../const/core.const";
export function tezResolve(): Plugin {
    const pathResolver = new CommonPathResolver();
	return {
		name: "vite:tez:pre",
        enforce: 'pre',
        async resolveId(id) {
            if(id === TEZ_ENV_ID)
                return pathResolver.clientEnvPath;      
          }
	}
}