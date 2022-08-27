import React from 'react';
import { render, screen } from '@testing-library/react';
import { ListingComponent } from './listing-component';
import { ListingViewModel } from '../listing-view-model';

describe('Listing Component Test Suite', () => {
    test('Should render a listing component', async () => {
        const renderer = {
            listing: {
                city: 'Los Angeles',
                price: '$100 / night',
                images: ['https://fake-domain.com/image.jpg'],
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
        };

        render(<ListingComponent model={new ListingViewModel(renderer)} />);

        const image = (await screen.findByRole('img')) as HTMLImageElement;
        expect(screen.queryByText('Los Angeles')).toBeTruthy();
        expect(screen.queryByText('$100 / night')).toBeTruthy();
        expect(screen.queryByText('Evan Coulson')).toBeTruthy();
        expect(screen.queryByText('Harvey Mudd College')).toBeTruthy();
        expect(screen.queryByText('Email:')).toBeTruthy();
        expect(screen.queryByText('ecoulson@g.hmc.edu')).toBeTruthy();
        expect(image.src).toEqual('https://fake-domain.com/image.jpg');
    });
});
