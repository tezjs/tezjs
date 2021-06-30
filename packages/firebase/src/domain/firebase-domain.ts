import { firebase } from "../core/firebase";
import { RedirectRoute } from "./redirect-route";
import path from 'path';
import fs from 'fs';
export class FirebaseDomain {
    private redirectRoute: RedirectRoute;
    constructor() {
        this.redirectRoute = new RedirectRoute();
    }

    async generate(builder: any, nuxtInstance:any) {
        const redirectRoutes = await this.redirectRoute.get(nuxtInstance.options.tez.strapi);
        var firebaseConfig = firebase;
        if (nuxtInstance.options.tez.firebase && nuxtInstance.options.tez.firebase.overrideConfig)
            firebaseConfig = nuxtInstance.options.tez.firebase.overrideConfig;
        firebaseConfig.hosting.redirects = redirectRoutes;
        const firebaseFile = path.join(
            builder.nuxt.options.rootDir, 'firebase.json'
        )
        await fs.writeFileSync(firebaseFile, JSON.stringify(firebaseConfig));
    }
}

