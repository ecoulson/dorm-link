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
    CommandType,
    RedirectCommand,
} from '../../../core';
import { CommandDispatcher } from '../../commands/command-dispatcher';
import { NetworkManager } from '../../network/network-manager';
import { CreateListingCommand } from './create-listing-command';
import { CreateListingCommandHandler } from './create-listing-command-handler';

describe('Create Listing Command Handler', () => {
    const mockedCommandDispatcher = mock(CommandDispatcher);
    const mockedNetworkManager = mock(NetworkManager);
    const handler = new CreateListingCommandHandler(
        instance(mockedCommandDispatcher),
        instance(mockedNetworkManager)
    );

    beforeEach(() => {
        reset(mockedCommandDispatcher);
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

        verify(mockedCommandDispatcher.dispatch(anything())).once();
        verify(mockedNetworkManager.makeRequest(anything())).once();
        const [firedEvent] = capture(mockedCommandDispatcher.dispatch).last();
        const [request] = capture(mockedNetworkManager.makeRequest).last();
        expect(firedEvent).toMatchObject({
            type: CommandType.Redirect,
            url: 'http://fake-domain.com/listing/id',
        });
        expect(request).toMatchObject({
            body: listingRequest,
        });
    });
});
