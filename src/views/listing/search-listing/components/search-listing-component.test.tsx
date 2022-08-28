import { render, screen } from '@testing-library/react';
import React from 'react';
import { InputType } from '../../../base/input-type';
import { SearchListingViewModel } from '../search-listing-view-model';
import { SearchListingComponent } from './search-listing-component';

describe('Search Listing Component Test Suite', () => {
    test('Should render the search listing component with listings', () => {
        render(
            <SearchListingComponent
                model={
                    new SearchListingViewModel({
                        searchbox: {
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
                        },
                        listingResults: [
                            {
                                images: ['http://fake-domain.com/image.png'],
                                city: 'Seattle',
                                school: 'Harvey Mudd College',
                                price: '$100.00 / night',
                            },
                        ],
                        noResultsText: 'No results for this city.',
                        resultCountText: '1 listings found',
                    })
                }
            />
        );

        expect(screen.queryByText('1 listings found')).toBeTruthy();
        expect(screen.queryByText('Search Listings')).toBeTruthy();
        expect(screen.queryByLabelText('Search By City')).toBeTruthy();
        expect(screen.queryByPlaceholderText('Los Angeles...')).toBeTruthy();
        expect(screen.queryByText('Seattle')).toBeTruthy();
        expect(screen.queryByDisplayValue('Seattle')).toBeTruthy();
        expect(screen.queryByText('$100.00 / night')).toBeTruthy();
        expect(screen.queryByText('Harvey Mudd College')).toBeTruthy();
        expect(screen.queryByRole('img')).toBeTruthy();
    });

    test('Should render the search listing component with no listings', () => {
        render(
            <SearchListingComponent
                model={
                    new SearchListingViewModel({
                        searchbox: {
                            input: {
                                type: InputType.TEXT,
                                name: 'city',
                                label: 'Search By City',
                                placeholder: 'Los Angeles...',
                            },
                            button: {
                                text: 'Search Listings',
                            },
                        },
                        listingResults: [],
                        noResultsText: 'No results for Seattle.',
                        resultCountText: '1 listings found',
                    })
                }
            />
        );

        expect(screen.queryByText('No results for Seattle.')).toBeTruthy();
    });
});
