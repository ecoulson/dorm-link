import { randomUUID } from 'crypto';
import {
    anyOfClass,
    capture,
    instance,
    mock,
    reset,
    verify,
    when,
} from 'ts-mockito';
import { Status } from '../../common/status';
import { UUIDGenerator } from '../identifiers/uuid-generator';
import { RedirectCommand } from '../navigation/redirect-command';
import { ContactInformation } from './contact-information/contact-information';
import { ContactMethodType } from './contact-information/contact-method-type';
import { EmailContactMethod } from './contact-information/email-contact-method';
import { Listing } from './models/listing';
import { ListingApproval } from './models/listing-approval';
import { ListingBroker } from './listing-broker';
import { ListingService } from './listing-service';

describe('Listing Service Test Suite', () => {
    const mockedBroker = mock(ListingBroker);
    const mockedUUIDGenerator = mock(UUIDGenerator);
    const service = new ListingService(
        instance(mockedBroker),
        instance(mockedUUIDGenerator)
    );

    beforeEach(() => {
        reset(mockedBroker);
        reset(mockedUUIDGenerator);
    });

    test('Should create a listing', async () => {
        const id = randomUUID();
        const expectedListing = new Listing(
            id,
            new ContactInformation(id, 'Evan Coulson', 'Harvey Mudd College', [
                new EmailContactMethod(id, 'ecoulson@g.hmc.edu'),
            ]),
            'Los Angeles',
            [],
            10000,
            new ListingApproval(id, false)
        );
        const expectedRedirectCommand = new RedirectCommand(
            `/listing/${expectedListing.id}`
        );
        when(mockedBroker.insert(anyOfClass(Listing))).thenResolve(
            Status.ok(expectedListing)
        );
        when(mockedUUIDGenerator.generate()).thenReturn(id);

        const redirectCommand = await service.create(
            {
                name: 'Evan Coulson',
                school: 'Harvey Mudd College',
                contactMethods: [
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

        expect(redirectCommand).toEqual(expectedRedirectCommand);
        verify(mockedBroker.insert(anyOfClass(Listing))).once();
        verify(mockedUUIDGenerator.generate()).times(4);
        const [listing] = capture(mockedBroker.insert).last();
        expect(listing).toEqual(expectedListing);
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
            10000,
            new ListingApproval(randomUUID(), false)
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
                10000,
                new ListingApproval(randomUUID(), false)
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
