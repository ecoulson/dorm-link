import { NextApiRequest, NextApiResponse } from 'next';
import { anything, instance, mock, reset, verify, when } from 'ts-mockito';
import { createNextRouter } from './create-next-router';
import { RouteHandler } from './route-handler';

describe('Create Next Router Test Suite', () => {
    const mockedRouteHandler = mock<RouteHandler>();
    const mockedRequest = mock<NextApiRequest>();
    const mockedResponse = mock<NextApiResponse>();
    const request = instance(mockedRequest);
    const response = instance(mockedResponse);

    beforeEach(() => {
        reset(mockedRequest);
        reset(mockedResponse);
        reset(mockedRouteHandler);
    });

    test('Should create a next router', async () => {
        const router = createNextRouter(instance(mockedRouteHandler));
        when(mockedRequest.method).thenReturn('GET');

        await router(request, response);

        verify(mockedRouteHandler.get(anything(), anything())).once();
    });
});
