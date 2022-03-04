import { defaultContainer } from "../const/core.const";
import * as  axios from 'axios';
import { UserCredential } from "@tezjs/types";
import cleanObject from "../sanitizers/clean-object.sanitizer";
import { swapDataPropValue } from "../sanitizers/swap-data-prop-value";
import { DEFAULT_STRAPI_URL } from "../const/app.const";
export class RequestService {
    private token: string;
    private apiUri: string;
    private userCredential: UserCredential;
    private apiString:string;
    constructor() {
        const { apiUri, userCredential,version } = defaultContainer.moduleOptions;
        this.apiUri = apiUri || DEFAULT_STRAPI_URL;
        this.userCredential = userCredential;
        this.apiString = version === 4 ? "/api":""
    }
    async get(uri: string) {
        console.log(`${this.apiUri}${this.apiString}${uri}`)
        const { data } = await axios.get(`${this.apiUri}${this.apiString}${uri}`, this.headers);
        return this.camalizeData(data.data);
    }

    private camalizeData(data:any) {
        return swapDataPropValue(cleanObject(data))
    }

    async login() {
        if (this.userCredential) {
            const { data } = await axios.post(`${this.apiUri}/admin/login`, this.userCredential);
            this.token = data.data.token;
        }
    }

    get headers(): { [key: string]: any } {
        if (this.token)
            return {
                headers: {
                    Authorization:
                        `Bearer ${this.token}`,
                },
            }
        else
            return {};
    }
}