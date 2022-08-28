import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { InputType } from '../../../base/input-type';
import { CitySearchBoxComponent } from './city-search-box-component';

describe('City Search Box Component Test Suite', () => {
    test('Should redirect the user to the new search page', () => {
        const handler = jest.fn();
        render(
            <CitySearchBoxComponent
                renderer={{
                    input: {
                        type: InputType.TEXT,
                        name: 'city',
                        label: 'Search By City',
                        placeholder: 'Los Angeles...',
                        value: 'Seattle',
                    },
                    button: {
                        text: 'Search Listings',
                    },
                }}
                handleSearch={handler}
            />
        );

        const input = screen.getByDisplayValue('Seattle');
        fireEvent.change(input, {
            target: {
                value: 'Los Angeles',
            },
        });
        const button = screen.getByRole('button');
        fireEvent.click(button);

        expect(handler).toBeCalledWith('Los Angeles');
    });
});
