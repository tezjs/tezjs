import { defaultContainer } from "../const/core.const";
import { RequestService } from "./request.server";

export class InternationalizationService {
    private enableInternationalization: boolean;
    constructor(private requestService: RequestService) {
        const { enableInternationalization } = defaultContainer.moduleOptions;
        this.enableInternationalization = enableInternationalization;
    }

    async getLocales() {
        let locales = ["en"];
        if (this.enableInternationalization)
            locales = await this.requestService.get(`/i18n/locales`);
        return locales;
    }
}