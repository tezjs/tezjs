import { commonContainer, convertDateToTicks } from "@tezjs/common";
import { BuildConfig } from "../interface/build-config";
import { readConfig } from "../functions/read-config";
import { appContainer } from "../const/container.const";
import { PageCollection } from "@tezjs/payload";

export async function generatePayload(config?: BuildConfig) {
    console.log("************************ GENERATING PAYLOAD *********************")
    if (config)
        commonContainer.buildOptions = { buildVersion: convertDateToTicks(new Date()), mode: config.mode, rootDir: config.rootDir || process.cwd(), port: 3000, commandName: "build" };
    await readConfig();
    appContainer.addOrUpdateTezTS()
    const pageCollection = new PageCollection();
    await pageCollection.generate();

    
    console.log("************************ GENERATING PAYLOAD FINISHED *********************")
}