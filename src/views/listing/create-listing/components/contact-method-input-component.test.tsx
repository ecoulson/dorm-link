import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { ContactMethodType } from '../../../../core';
import { InputType } from '../../../base/input-type';
import { ContactMethodInputComponent } from './contact-method-input-component';

describe('Contact Method Input Component Test Suite', () => {
    test('Should render a contact method input and add an email method', () => {
        const handler = jest.fn();
        render(
            <ContactMethodInputComponent
                renderer={{
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
                }}
                onChange={handler}
            />
        );

        const emailButton = screen.getByText('Add Email');
        fireEvent.click(emailButton);
        const input = screen.getByLabelText('Email');
        fireEvent.change(input, {
            target: {
                value: 'ecoulson@hmc.edu',
            },
        });

        expect(handler).toBeCalledWith([
            {
                type: ContactMethodType.Email,
                value: 'ecoulson@hmc.edu',
            },
        ]);
    });

    test('Should render a contact method input and add phone number method', () => {
        const handler = jest.fn();
        render(
            <ContactMethodInputComponent
                renderer={{
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
                }}
                onChange={handler}
            />
        );

        const phoneButton = screen.getByText('Add Phone Number');
        fireEvent.click(phoneButton);
        const input = screen.getByLabelText('Phone Number');
        fireEvent.change(input, {
            target: {
                value: '(425) 503-5202',
            },
        });

        expect(handler).toBeCalledWith([
            {
                type: ContactMethodType.Phone,
                value: '(425) 503-5202',
            },
        ]);
    });

    test('Should render a contact method input and add both methods', () => {
        const handler = jest.fn();
        render(
            <ContactMethodInputComponent
                renderer={{
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
                }}
                onChange={handler}
            />
        );

        const phoneButton = screen.getByText('Add Phone Number');
        fireEvent.click(phoneButton);
        const phoneNumberInput = screen.getByLabelText('Phone Number');
        fireEvent.change(phoneNumberInput, {
            target: {
                value: '(425) 503-5202',
            },
        });
        const emailButton = screen.getByText('Add Email');
        fireEvent.click(emailButton);
        const emailInput = screen.getByLabelText('Email');
        fireEvent.change(emailInput, {
            target: {
                value: 'ecoulson@hmc.edu',
            },
        });

        expect(handler).toBeCalledWith([
            {
                type: ContactMethodType.Phone,
                value: '(425) 503-5202',
            },
            {
                type: ContactMethodType.Email,
                value: 'ecoulson@hmc.edu',
            },
        ]);
    });
});
