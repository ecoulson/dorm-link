import { randomUUID } from 'crypto';
import { anything, instance, mock, reset, when } from 'ts-mockito';
import { ContactInformation } from '../../../core/listings/contact-information/contact-information';
import { EmailContactMethod } from '../../../core/listings/contact-information/email-contact-method';
import { Listing } from '../../../core/listings/listing';
import { ListingController } from '../../../core/listings/listing-controller';
import { ListingView } from './listing-view';

describe('Listing View Test Suite', () => {
    const mockedController = mock(ListingController);
    const view = new ListingView(instance(mockedController));

    beforeEach(() => {
        reset(mockedController);
    });

    test('Should get the view model for displaying a listing', async () => {
        const id = randomUUID();
        when(mockedController.getById(anything())).thenResolve(
            new Listing(
                randomUUID(),
                new ContactInformation(
                    randomUUID(),
                    'Evan Coulson',
                    'Harvey Mudd College',
                    [new EmailContactMethod(randomUUID(), 'ecoulson@g.hmc.edu')]
                ),
                'Los Angeles',
                ['http://fake-domain.com/image.jpg'],
                10000
            )
        );

        const renderer = await view.displayListing(id);

        expect(renderer).toEqual({
            listing: {
                city: 'Los Angeles',
                price: '$100.00 / night',
                images: ['http://fake-domain.com/image.jpg'],
            },
            contactInformation: {
                name: 'Evan Coulson',
                school: 'Harvey Mudd College',
                contactMethods: [
                    {
                        label: 'Email',
                        value: 'ecoulson@g.hmc.edu',
                    },
                ],
            },
        });
    });
});
