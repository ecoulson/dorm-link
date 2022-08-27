import { render, screen } from '@testing-library/react';
import React from 'react';
import { instance, mock, reset } from 'ts-mockito';
import { InputType } from '../../../base/input-type';
import { TextInputRenderer } from '../../../base/renderers/text-input-renderer';
import { CommandDispatcher } from '../../../commands/command-dispatcher';
import { SubmitFormCommand } from '../../../forms/submit-form-command';
import { ContactMethodInputRender } from '../../display-listing/renderers/contact-method-input-renderer';
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
                    new CreateListingViewModel({
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
