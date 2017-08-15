
class PanthalassaApi {

    constructor() {
        this.host = "http://localhost:4001";
    }

    sync() {
        const endpoint = `${this.host}/v0/sync`;
        return fetch(endpoint);
    }

    getFeed(username) {
        if (!username) {
            throw "Missing required username to get feed";
        }

        const endpoint = `${this.host}/v0/messages/${username}`;
        return fetch(endpoint);
    }

    getMessage(username, sequence) {
        if (!username || !sequence) {
            throw `Missing required username (${username}) or sequence to get feed (${sequence})`;
        }

        const endpoint = `${this.host}/v0/messages/${username}/${sequence}`;
        return fetch(endpoint);
    }
}

return new PanthalassaApi()
