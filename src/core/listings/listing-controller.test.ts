import { randomUUID } from 'crypto';
import {
    anyString,
    anything,
    instance,
    mock,
    reset,
    verify,
    when,
} from 'ts-mockito';
import { ContactInfo } from './contact-information/contact-info';
import { Listing } from './listing';
import { ListingController } from './listing-controller';
import { ListingService } from './listing-service';

describe('Listing Controller Test Suite', () => {
    const mockedListingService = mock(ListingService);
    const controller = new ListingController(instance(mockedListingService));

    beforeEach(() => {
        reset(mockedListingService);
    });

    test('Should create a listing', async () => {
        const expectedListing = new Listing(
            randomUUID(),
            new ContactInfo(
                randomUUID(),
                'Evan Coulson',
                'Harvey Mudd College',
                []
            ),
            'Los Angeles',
            [],
            1000
        );
        when(mockedListingService.create(anything(), anything())).thenResolve(
            expectedListing
        );

        const actualListing = await controller.create({
            listing: {
                city: 'Los Angeles',
                images: [],
                price: 1000,
            },
            contactInfo: {
                name: 'Evan Coulson',
                school: 'Harvey Mudd College',
                methods: [],
            },
        });

        expect(actualListing).toEqual(expectedListing);
        verify(mockedListingService.create(anything(), anything())).once();
    });

    test('Should get a listing by id', async () => {
        const id = randomUUID();
        const expectedListing = new Listing(
            id,
            new ContactInfo(
                randomUUID(),
                'Evan Coulson',
                'Harvey Mudd College',
                []
            ),
            'Los Angeles',
            [],
            1000
        );
        when(mockedListingService.getById(anyString())).thenResolve(
            expectedListing
        );

        const actualListing = await controller.getById({ id });

        expect(actualListing).toEqual(expectedListing);
        verify(mockedListingService.getById(id)).once();
    });

    test('Should search for listings', async () => {
        const id = randomUUID();
        const expectedListings = [
            new Listing(
                id,
                new ContactInfo(
                    randomUUID(),
                    'Evan Coulson',
                    'Harvey Mudd College',
                    []
                ),
                'Los Angeles',
                [],
                1000
            ),
        ];
        when(mockedListingService.search(anyString())).thenResolve(
            expectedListings
        );

        const actualListings = await controller.search({ city: 'Los Angeles' });

        expect(actualListings).toEqual(expectedListings);
        verify(mockedListingService.search('Los Angeles')).once();
    });
});
