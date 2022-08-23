import { randomUUID } from 'crypto';
import { anyOfClass, instance, mock, reset, verify, when } from 'ts-mockito';
import { Status } from '../../common/status';
import { ContactInformation } from './contact-information/contact-information';
import { ContactMethodType } from './contact-information/contact-method-type';
import { EmailContactMethod } from './contact-information/email-contact-method';
import { Listing } from './listing';
import { ListingBroker } from './listing-broker';
import { ListingService } from './listing-service';

describe('Listing Service Test Suite', () => {
    const mockedBroker = mock(ListingBroker);
    const service = new ListingService(instance(mockedBroker));

    beforeEach(() => {
        reset(mockedBroker);
    });

    test('Should create a listing', async () => {
        const expectedListing = new Listing(
            randomUUID(),
            new ContactInformation(
                randomUUID(),
                'Evan Coulson',
                'Harvey Mudd College',
                [new EmailContactMethod(randomUUID(), 'ecoulson@g.hmc.edu')]
            ),
            'Los Angeles',
            [],
            10000
        );
        when(mockedBroker.insert(anyOfClass(Listing))).thenResolve(
            Status.ok(expectedListing)
        );

        const listing = await service.create(
            {
                name: 'Evan Coulson',
                school: 'Harvey Mudd College',
                methods: [
                    {
                        type: ContactMethodType.Email,
                        value: 'ecoulson@g.hmc.edu',
                    },
                ],
            },
            {
                price: 10000,
                city: 'Los Angeles',
                images: [],
            }
        );

        expect(listing).toEqual(expectedListing);
        verify(mockedBroker.insert(anyOfClass(Listing))).once();
    });

    test('Should get a listing by id', async () => {
        const id = randomUUID();
        const expectedListing = new Listing(
            id,
            new ContactInformation(
                randomUUID(),
                'Evan Coulson',
                'Harvey Mudd College',
                [new EmailContactMethod(randomUUID(), 'ecoulson@g.hmc.edu')]
            ),
            'Los Angeles',
            [],
            10000
        );
        when(mockedBroker.selectById(id)).thenResolve(
            Status.ok(expectedListing)
        );

        const listing = await service.getById(id);

        expect(listing).toEqual(expectedListing);
        verify(mockedBroker.selectById(id)).once();
    });

    test('Should search for listings by city', async () => {
        const id = randomUUID();
        const expectedListings = [
            new Listing(
                id,
                new ContactInformation(
                    randomUUID(),
                    'Evan Coulson',
                    'Harvey Mudd College',
                    [new EmailContactMethod(randomUUID(), 'ecoulson@g.hmc.edu')]
                ),
                'Los Angeles',
                [],
                10000
            ),
        ];
        when(mockedBroker.selectAllByCity('Los Angeles')).thenResolve(
            Status.ok(expectedListings)
        );

        const listing = await service.search('Los Angeles');

        expect(listing).toEqual(expectedListings);
        verify(mockedBroker.selectAllByCity('Los Angeles')).once();
    });
});
