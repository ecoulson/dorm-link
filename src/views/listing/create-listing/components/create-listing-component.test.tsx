import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { anything, capture, instance, mock, reset, verify } from 'ts-mockito';
import { InputType } from '../../../base/input-type';
import { TextInputRenderer } from '../../../base/renderers/text-input-renderer';
import { CommandDispatcher } from '../../../commands/command-dispatcher';
import { ContactMethodInputRender } from '../../display-listing/renderers/contact-method-input-renderer';
import { CreateListingCommand } from '../create-listing-command';
import { CreateListingViewModel } from '../create-listing-view-model';
import { ImageInputRenderer } from '../renderers/image-input-renderer';
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
                    new CreateListingViewModel(
                        {
                            form: {
                                name: 'create-listing-form',
                                sections: [
                                    {
                                        header: {
                                            description:
                                                'Provide information about your listing.',
                                        },
                                        contents: [
                                            {
                                                label: 'City',
                                                name: 'city',
                                                type: InputType.TEXT,
                                                placeholder: 'Los Angeles...',
                                            } as TextInputRenderer,
                                            {
                                                label: 'Price ($USD / night)',
                                                name: 'price',
                                                type: InputType.TEXT,
                                            } as TextInputRenderer,
                                            {
                                                type: InputType.IMAGE_URL,
                                                url: {
                                                    label: 'Image URL',
                                                    name: 'image',
                                                    type: InputType.TEXT,
                                                },
                                                addImageButton: {
                                                    text: 'Add Image',
                                                },
                                            } as ImageInputRenderer,
                                        ],
                                    },
                                    {
                                        header: {
                                            description:
                                                'Provide information and methods for people intersted in your property to contact you.',
                                        },
                                        contents: [
                                            {
                                                label: 'Name',
                                                name: 'name',
                                                type: InputType.TEXT,
                                            } as TextInputRenderer,
                                            {
                                                label: 'University / College',
                                                name: 'school',
                                                type: InputType.TEXT,
                                            } as TextInputRenderer,
                                            {
                                                type: InputType.CONTACT_METHOD,
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
                                            } as ContactMethodInputRender,
                                        ],
                                    },
                                ],
                                submit: {
                                    text: 'Create Listing',
                                },
                            },
                        },
                        instance(mockedDispatcher)
                    )
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

    test('Should render the create listing component', () => {
        render(
            <CreateListingComponent
                model={
                    new CreateListingViewModel(
                        {
                            form: {
                                name: 'create-listing-form',
                                sections: [
                                    {
                                        header: {
                                            description:
                                                'Provide information about your listing.',
                                        },
                                        contents: [
                                            {
                                                label: 'City',
                                                name: 'city',
                                                type: InputType.TEXT,
                                                placeholder: 'Los Angeles...',
                                            } as TextInputRenderer,
                                            {
                                                label: 'Price ($USD / night)',
                                                name: 'price',
                                                type: InputType.TEXT,
                                            } as TextInputRenderer,
                                            {
                                                type: InputType.IMAGE_URL,
                                                url: {
                                                    label: 'Image URL',
                                                    name: 'image',
                                                    type: InputType.TEXT,
                                                },
                                                addImageButton: {
                                                    text: 'Add Image',
                                                },
                                            } as ImageInputRenderer,
                                        ],
                                    },
                                    {
                                        header: {
                                            description:
                                                'Provide information and methods for people intersted in your property to contact you.',
                                        },
                                        contents: [
                                            {
                                                label: 'Name',
                                                name: 'name',
                                                type: InputType.TEXT,
                                            } as TextInputRenderer,
                                            {
                                                label: 'University / College',
                                                name: 'school',
                                                type: InputType.TEXT,
                                            } as TextInputRenderer,
                                            {
                                                type: InputType.CONTACT_METHOD,
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
                                            } as ContactMethodInputRender,
                                        ],
                                    },
                                ],
                                submit: {
                                    text: 'Create Listing',
                                },
                            },
                        },
                        instance(mockedDispatcher)
                    )
                }
            />
        );

        const city = screen.getByLabelText('City');
        fireEvent.change(city, {
            target: {
                value: 'Seattle',
            },
        });
        const price = screen.getByLabelText('Price ($USD / night)');
        fireEvent.change(price, {
            target: {
                value: '100.00',
            },
        });
        const name = screen.getByLabelText('Name');
        fireEvent.change(name, {
            target: {
                value: 'Evan Coulson',
            },
        });
        const school = screen.getByLabelText('University / College');
        fireEvent.change(school, {
            target: {
                value: 'Harvey Mudd College',
            },
        });
        const submit = screen.getByText('Create Listing');
        fireEvent.click(submit);

        verify(mockedDispatcher.dispatch(anything())).once();
        const [command] = capture(mockedDispatcher.dispatch).last();
        expect(command).toEqual(
            new CreateListingCommand({
                listing: {
                    city: 'Seattle',
                    price: 10000,
                    images: [],
                },
                contactInformation: {
                    contactMethods: [],
                    name: 'Evan Coulson',
                    school: 'Harvey Mudd College',
                },
            })
        );
    });
});
