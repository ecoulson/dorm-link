import { Prisma } from '@prisma/client';
import { randomUUID } from 'crypto';
import { anything, instance, mock, reset, verify, when } from 'ts-mockito';
import { ContactInformation } from './contact-information/contact-information';
import { Listing } from './listing';
import { ListingBroker } from './listing-broker';

describe('Listing Broker Test Suite', () => {
    const mockedPrismaClient = mock<Prisma.ListingDelegate<unknown>>();
    const broker = new ListingBroker(instance(mockedPrismaClient));

    beforeEach(() => {
        reset(mockedPrismaClient);
    });

    test('Should insert a listing', async () => {
        const inputListing = new Listing(
            randomUUID(),
            new ContactInformation(
                randomUUID(),
                'Evan Coulson',
                'Harvey Mudd College',
                []
            ),
            'Los Angeles',
            [],
            1000
        );
        const expectedListing = inputListing;
        when(mockedPrismaClient.create(anything())).thenResolve(
            expectedListing
        );

        const listing = await broker.insert(inputListing);

        expect(listing.value()).toEqual(expectedListing);
        verify(mockedPrismaClient.create(anything())).once();
    });

    test('Should get the listing by id', async () => {
        const expectedListing = new Listing(
            randomUUID(),
            new ContactInformation(
                randomUUID(),
                'Evan Coulson',
                'Harvey Mudd College',
                []
            ),
            'Los Angeles',
            [],
            1000
        );
        when(mockedPrismaClient.findFirst(anything())).thenResolve(
            expectedListing
        );

        const listing = await broker.selectById(expectedListing.id);

        expect(listing.value()).toEqual(expectedListing);
        verify(mockedPrismaClient.findFirst(anything())).once();
    });

    test('Should get listings by city', async () => {
        const expectedListings = [
            new Listing(
                randomUUID(),
                new ContactInformation(
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
        when(mockedPrismaClient.findMany(anything())).thenResolve(
            expectedListings
        );

        const listings = await broker.selectAllByCity('Los Angeles');

        expect(listings.value()).toEqual(expectedListings);
        verify(mockedPrismaClient.findMany(anything())).once();
    });
});
