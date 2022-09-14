import { NextApiRequest, NextApiResponse } from 'next';
import {
    anything,
    capture,
    instance,
    mock,
    reset,
    verify,
    when,
} from 'ts-mockito';
import { ListingController } from '../controllers/listing-controller';
import { ListingRouteHandler } from './listing-route-handler';

describe('Listing Route Handler Test Suite', () => {
    const mockedController = mock(ListingController);
    const mockedRequest = mock<NextApiRequest>();
    const mockedResponse = mock<NextApiResponse>();
    const handler = new ListingRouteHandler(instance(mockedController));
    const request = instance(mockedRequest);
    const response = instance(mockedResponse);

    beforeEach(() => {
        reset(mockedController);
        reset(mockedRequest);
        reset(mockedResponse);
    });

    test('Should respond with a 404 for get', async () => {
        when(mockedResponse.status(404)).thenReturn(response);

        await handler.get(request, response);

        verify(mockedResponse.status(404)).once();
        verify(mockedResponse.send('')).once();
    });

    test('Should respond with a 404 for put', async () => {
        when(mockedResponse.status(404)).thenReturn(response);

        await handler.put(request, response);

        verify(mockedResponse.status(404)).once();
        verify(mockedResponse.send('')).once();
    });

    test('Should respond with a 404 for delete', async () => {
        when(mockedResponse.status(404)).thenReturn(response);

        await handler.put(request, response);

        verify(mockedResponse.status(404)).once();
        verify(mockedResponse.send('')).once();
    });

    test('Should call controller and respond with a 200', async () => {
        when(mockedResponse.status(200)).thenReturn(response);

        await handler.post(request, response);

        verify(mockedResponse.status(200)).once();
        verify(mockedResponse.json(anything())).once();
        verify(mockedController.create(anything())).once();
    });
});
