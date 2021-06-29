import { firebase } from "../core/firebase";
import { RedirectRoute } from "./redirect-route";
import path from 'path';
import fs from 'fs';
export class FirebaseDomain {
    private redirectRoute: RedirectRoute;
    constructor() {
        this.redirectRoute = new RedirectRoute();
    }

    async generate(builder: any, config: any) {
        const redirectRoutes = await this.redirectRoute.get(config);
        firebase.hosting.redirects = redirectRoutes;
        const firebaseFile = path.join(
            builder.nuxt.options.rootDir, 'firebase.json'
        )
        await fs.writeFileSync(firebaseFile, JSON.stringify(firebase));
    }
}

