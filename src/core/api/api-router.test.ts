import { NextApiRequest, NextApiResponse } from 'next';
import { anything, instance, mock, reset, verify, when } from 'ts-mockito';
import { APIRouter } from './api-router';
import { RouteHandler } from './route-handler';

describe('API Router Test Suite', () => {
    const mockedRequest = mock<NextApiRequest>();
    const mockedResponse = mock<NextApiResponse>();
    const mockedRouteHandler = mock<RouteHandler>();
    const router = new APIRouter(instance(mockedRouteHandler));
    const request = instance(mockedRequest);
    const response = instance(mockedResponse);

    beforeEach(() => {
        reset(mockedRouteHandler);
        reset(mockedRequest);
        reset(mockedResponse);
    });

    test('Makes get request', async () => {
        when(mockedRequest.method).thenReturn('Get');

        await router.route(request, response);

        verify(mockedRouteHandler.get(anything(), anything())).once();
    });

    test('Makes post request', async () => {
        when(mockedRequest.method).thenReturn('POST');

        await router.route(request, response);

        verify(mockedRouteHandler.post(anything(), anything())).once();
    });

    test('Makes put request', async () => {
        when(mockedRequest.method).thenReturn('PUT');

        await router.route(request, response);

        verify(mockedRouteHandler.put(anything(), anything())).once();
    });

    test('Makes delete request', async () => {
        when(mockedRequest.method).thenReturn('DELETE');

        await router.route(request, response);

        verify(mockedRouteHandler.delete(anything(), anything())).once();
    });

    test('Makes unsupported request', async () => {
        when(mockedRequest.method).thenReturn('PATCH');
        when(mockedResponse.status(404)).thenReturn(response);

        await router.route(request, response);

        verify(mockedResponse.status(404)).once();
        verify(mockedResponse.send('')).once();
    });
});
