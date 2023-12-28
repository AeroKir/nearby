import { API_GATEWAY_URL } from '../constants/api';
import HttpService from '../lib/http-service';

const httpService = new HttpService();

export async function getCountries() {
    try {
        // const res = requestService();
        // const customers = await res.getData(`${API_GATEWAY_URL}/customers`);

        const countries = await httpService.getData(`${API_GATEWAY_URL}/location-api/countries`);
        return countries;
    } catch (error) {
        console.log(error);
    }
}

export async function getCitiesInTheCountry(query) {
    try {
        const cities = await httpService.getData(`${API_GATEWAY_URL}/location-api/cities/cities-in-country?${query}`);
        console.log(cities);
        return cities;
    } catch (error) {
        console.log(error);
    }
}


