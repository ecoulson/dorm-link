import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { InputType } from '../input-type';
import { TextInputComponent } from './text-input-component';
import { Optional } from '../../../common/optional';

describe('Text Input Component Test Suite', () => {
    test('Should render a text input component that handles change events', () => {
        const handler = jest.fn();
        render(
            <TextInputComponent
                renderer={{
                    name: 'name',
                    label: 'Label',
                    type: InputType.TEXT,
                    placeholder: 'Placeholder...',
                }}
                value={Optional.empty()}
                onChange={handler}
            />
        );

        fireEvent.change(screen.getByPlaceholderText('Placeholder...'), {
            target: {
                value: 'input',
            },
        });

        expect(handler).toBeCalledWith('input');
        expect(screen.queryByLabelText('Label')).toBeTruthy();
        expect(screen.queryByDisplayValue('input')).toBeTruthy();
    });
});
