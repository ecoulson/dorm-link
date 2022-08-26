import { Request } from './request';
import { Response } from './response';
import { AxiosInstance } from 'axios';

export class NetworkManager {
    constructor(
        private readonly hostname: string,
        private readonly axios: AxiosInstance
    ) {}

    async makeRequest(request: Request): Promise<Response> {
        const axiosResponse = await this.axios.request({
            method: request.method,
            headers: request.headers,
            baseURL: this.hostname,
            url: request.path,
            data: request.body,
        });
        return {
            statusCode: axiosResponse.status,
            data: axiosResponse.data,
            headers: axiosResponse.headers,
        };
    }
}
