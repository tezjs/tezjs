import {Plugin } from "vite"
import { BundleModifier } from "../bundle-modifier";

export function tezGenBundle(): Plugin {
	return {
		name: "vite:tez-gen-bundle",
		async generateBundle(_outputOptions, bundle) {
            var bundleModifier = new BundleModifier(bundle);
            bundleModifier.overwrite();
        }
	}
}