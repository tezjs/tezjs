import { defaultContainer } from "../const/core.const";
import axios from 'axios';
import { UserCredential } from "../interface/user-credential-config";
export class RequestService {
    private token: string;
    private apiUri: string;
    private userCredential: UserCredential;
    constructor() {
        const { apiUri, userCredential } = defaultContainer.moduleOptions;
        this.apiUri = apiUri;
        this.userCredential = userCredential;
    }
    async get(uri: string) {
        const { data } = await axios.get(`${this.apiUri}${uri}`, this.headers);
        return data;
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