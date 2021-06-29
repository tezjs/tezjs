import axios from 'axios';
export class RedirectRoute {
    async get(config: { [key: string]: any }): Promise<Array<{ source: string, destination: string, type: string }>> {
        const { data } = await axios.get(`${config.apiUri}/redirect-routes?_limit=10000`);
        let redirects = [];
        if (data) {
            data.forEach(t => {
                redirects.push(
                    {
                        "source": t.From,
                        "destination": t.To,
                        "type": t.StatusCode
                    }
                )
            });
        }
        return redirects
    }
}