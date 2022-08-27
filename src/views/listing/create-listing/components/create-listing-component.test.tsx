import { render, screen } from '@testing-library/react';
import React from 'react';
import { instance, mock, reset } from 'ts-mockito';
import { InputType } from '../../../base/input-type';
import { CommandDispatcher } from '../../../commands/command-dispatcher';
import { SubmitFormCommand } from '../../../forms/submit-form-command';
import { CreateListingViewModel } from '../create-listing-view-model';
import { CreateListingComponent } from './create-listing-component';

describe('Create Listing Component Test Suite', () => {
    const mockedDispatcher = mock(CommandDispatcher);

    beforeEach(() => {
        reset(mockedDispatcher);
    });

    test('Should render the create listing component', () => {
        render(
            <CreateListingComponent
                model={
                    new CreateListingViewModel({
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
                                command: new SubmitFormCommand(
                                    'create-listing-form'
                                ),
                            },
                        },
                    })
                }
            />
        );

        expect(
            screen.queryByText('Provide information about your listing.')
        ).toBeTruthy();
        expect(screen.queryByLabelText('City')).toBeTruthy();
        expect(screen.queryByLabelText('Price ($USD / night)')).toBeTruthy();
        expect(
            screen.queryByText(
                'Provide information and methods for people intersted in your property to contact you.'
            )
        ).toBeTruthy();
        expect(screen.queryByLabelText('Name')).toBeTruthy();
        expect(screen.queryByLabelText('University / College')).toBeTruthy();
        expect(screen.queryByText('Create Listing')).toBeTruthy();
    });
});
