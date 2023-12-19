function requestService() {
    async function getData(url) {
        try {
            const req = await fetch(url);
            const res = await req.json();
            return res;
        } catch (error) {
            console.log(error);
        }
    }

    return {
        getData
    };
}

export class HttpService {
    constructor() {
        this.getData = async function (url) {
            try {
                const req = await fetch(url);
                const res = await req.json();
                return res;
            } catch (error) {
                console.log(error);
            }
        };
    }
}

export default requestService;