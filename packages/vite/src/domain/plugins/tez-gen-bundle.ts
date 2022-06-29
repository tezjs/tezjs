import {Plugin } from "vite"

export function tezGenBundle(): Plugin {
	return {
		name: "vite:tez-gen-bundle",
		async generateBundle(_outputOptions, bundle) {
            
            // for (const [fileName, value] of Object.entries(bundle)) {
            
            // }
        }
	}
}