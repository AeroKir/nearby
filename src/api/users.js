import { API_GATEWAY_URL } from '../constants/api';
import requestService from '../lib/get';
import { HttpService } from '../lib/get';

const service = new HttpService();

export async function getCustomers() {
    try {
        // const res = requestService();
        // const customers = await res.getData(`${API_GATEWAY_URL}/customers`);

        const customers = await service.getData(`${API_GATEWAY_URL}/customers`);
        return customers;
    } catch (error) {
        console.log(error);
    }
}

export async function getRepairers() {
    try {
        const repairers = await service.getData(`${API_GATEWAY_URL}/repairers`);
        return repairers;
    } catch (error) {
        console.log(error);
    }
}
