import { randomUUID } from 'crypto';
import { anything, instance, mock, reset, when } from 'ts-mockito';
import {
    Command,
    CommandType,
    ContactInformation,
    EmailContactMethod,
    Listing,
    ListingController,
} from '../../core';
import { InputType } from '../base/input-type';
import { SubmitFormCommand } from '../forms/submit-form-command';
import { CreateListingRenderer } from './create-listing/renderers/create-listing-renderer';
import { ListingView } from './listing-view';

describe('Listing View Test Suite', () => {
    const mockedController = mock<ListingController>();
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

        const renderer = await view.buildDisplayListingView(id);

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

    test('Should fill create listing form renderer', () => {
        const renderer = view.buildCreateListingFormView();

        expect(renderer).toEqual<CreateListingRenderer>({
            form: {
                name: 'create-listing-form',
                sections: {
                    listing: {
                        header: {
                            description:
                                'Provide information about your listing.',
                        },
                        sections: {
                            city: {
                                label: 'City',
                                name: 'city',
                                type: InputType.TEXT,
                                placeholder: 'Los Angeles...',
                            },
                            price: {
                                label: 'Price ($USD / night)',
                                name: 'price',
                                type: InputType.TEXT,
                            },
                            images: {
                                type: InputType.IMAGE_URL,
                                url: {
                                    label: 'Image URL',
                                    name: 'image',
                                    type: InputType.TEXT,
                                },
                                addImageButton: {
                                    text: 'Add Image',
                                },
                            },
                        },
                    },
                    contactInformation: {
                        header: {
                            description:
                                'Provide information and methods for people intersted in your property to contact you.',
                        },
                        sections: {
                            name: {
                                label: 'Name',
                                name: 'name',
                                type: InputType.TEXT,
                            },
                            school: {
                                label: 'University / College',
                                name: 'school',
                                type: InputType.TEXT,
                            },
                            contactMethods: {
                                email: {
                                    label: 'Email',
                                    name: 'email',
                                    type: InputType.TEXT,
                                },
                                addEmailButton: {
                                    text: 'Add Email',
                                },
                                phoneNumber: {
                                    label: 'Phone Number',
                                    name: 'phoneNumber',
                                    type: InputType.TEXT,
                                },
                                addPhoneNumber: {
                                    text: 'Add Phone Number',
                                },
                            },
                        },
                    },
                },
                submit: {
                    text: 'Create Listing',
                    command: new SubmitFormCommand('create-listing-form'),
                },
            },
        });
    });
});
