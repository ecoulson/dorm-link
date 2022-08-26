import {
    anything,
    capture,
    instance,
    mock,
    reset,
    verify,
    when,
} from 'ts-mockito';
import {
    CreateListingRequest,
    ContactMethodType,
    EventEmitter,
    EventType,
    CommandType,
    RedirectCommand,
} from '../../../core';
import { NetworkManager } from '../../network/network-manager';
import { CreateListingCommand } from './create-listing-command';
import { CreateListingCommandHandler } from './create-listing-command-handler';

describe('Create Listing Command Handler', () => {
    const mockedEventEmitter = mock(EventEmitter);
    const mockedNetworkManager = mock(NetworkManager);
    const handler = new CreateListingCommandHandler(
        instance(mockedEventEmitter),
        instance(mockedNetworkManager)
    );

    beforeEach(() => {
        reset(mockedEventEmitter);
        reset(mockedNetworkManager);
    });

    test('Should create a listing and emit a listing created event when it is created', async () => {
        const listingRequest: CreateListingRequest = {
            listing: {
                city: 'Los Angeles',
                price: 10000,
                images: [],
            },
            contactInformation: {
                name: 'Evan Coulson',
                school: 'Harvey Mudd College',
                contactMethods: [
                    {
                        type: ContactMethodType.Email,
                        value: 'ecoulson@hmc.edu',
                    },
                ],
            },
        };
        when(mockedNetworkManager.makeRequest(anything())).thenResolve({
            headers: {},
            data: new RedirectCommand('http://fake-domain.com/listing/id'),
            statusCode: 200,
        });

        await handler.handle(new CreateListingCommand(listingRequest));

        verify(mockedEventEmitter.fire(anything())).once();
        verify(mockedNetworkManager.makeRequest(anything())).once();
        const [firedEvent] = capture(mockedEventEmitter.fire).last();
        const [request] = capture(mockedNetworkManager.makeRequest).last();
        expect(firedEvent).toMatchObject({
            type: EventType.ListingCreated,
            data: {
                type: CommandType.Redirect,
                url: 'http://fake-domain.com/listing/id',
            },
        });
        expect(request).toMatchObject({
            body: listingRequest,
        });
    });
});
