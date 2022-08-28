import { anything, capture, instance, mock, reset, verify } from 'ts-mockito';
import { CommandType } from '../../../core';
import { CommandDispatcher } from '../../commands/command-dispatcher';
import { CreateListingViewModel } from './create-listing-view-model';
import { CreateListingRenderer } from './renderers/create-listing-renderer';

describe('Create Listing View Model Test Suite', () => {
    const mockedDispatcher = mock(CommandDispatcher);

    beforeEach(() => {
        reset(mockedDispatcher);
    });

    test('Should dispatch a create listing command', () => {
        const model = new CreateListingViewModel(
            {} as CreateListingRenderer,
            instance(mockedDispatcher)
        );

        model.createListing({
            listing: {
                city: 'Seattle',
                price: '100.99',
                images: [],
            },
            contactInformation: {
                name: 'Evan Coulson',
                school: 'Harvey Mudd College',
                contactMethods: [],
            },
        });

        verify(mockedDispatcher.dispatch(anything())).once();
        const [command] = capture(mockedDispatcher.dispatch).last();
        expect(command).toEqual({
            type: CommandType.CreateListing,
            listingRequest: {
                listing: {
                    city: 'Seattle',
                    price: 10099,
                    images: [],
                },
                contactInformation: {
                    name: 'Evan Coulson',
                    school: 'Harvey Mudd College',
                    contactMethods: [],
                },
            },
        });
    });
});
