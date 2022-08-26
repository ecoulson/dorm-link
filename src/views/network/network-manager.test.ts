import { anything, capture, instance, mock, when } from 'ts-mockito';
import { NetworkManager } from './network-manager';
import { AxiosInstance } from 'axios';
import { HTTPMethod } from './http-method';

describe('Network Manager Test Suite', () => {
    const mockedAxios = mock<AxiosInstance>();
    const networkManager = new NetworkManager(
        'http://fake-domain.com',
        instance(mockedAxios)
    );

    test('Should make a request using the network manager', async () => {
        when(mockedAxios.request(anything())).thenResolve({
            status: 200,
            statusText: 'OK',
            headers: {},
            config: {},
            data: {
                foo: 'bar',
            },
        });

        const response = await networkManager.makeRequest({
            method: HTTPMethod.GET,
            path: '/api/data',
            headers: {},
            body: {
                baz: 'buz',
            },
        });

        expect(response).toEqual({
            statusCode: 200,
            headers: {},
            data: {
                foo: 'bar',
            },
        });
        const [axiosRequest] = capture(mockedAxios.request<any>).last();
        expect(axiosRequest).toEqual({
            url: '/api/data',
            method: 'GET',
            baseURL: 'http://fake-domain.com',
            headers: {},
            data: {
                baz: 'buz',
            },
        });
    });
});
