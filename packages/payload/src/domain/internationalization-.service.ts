import { defaultContainer } from "../const/core.const";
import { RequestService } from "./request.server";

export class InternationalizationService {
    private enableInternationalization: boolean;
    private version:number;
    constructor(private requestService: RequestService) {
        const { enableInternationalization,version } = defaultContainer.moduleOptions;
        this.enableInternationalization = enableInternationalization;
        this.version = version;
    }

    async getLocales() {
        let locales:string[] = ["en"];
        if (this.enableInternationalization) {
            let data = await this.requestService.get(`/i18n/locales`);
            if(this.version === 4) {
                locales = [];
                data.forEach(item=>{
                    locales.push(item.code)
                })
            }
        }
        return locales;
    }
}