class HttpService {
    constructor(url) {
        this.url = url;
    }

    async getData(url) {
        try {
            const result = await fetch(url);
            const data = await result.json();
            return data;
        } catch (error) {
            console.log(error);
        }
    }
}

export default HttpService;
