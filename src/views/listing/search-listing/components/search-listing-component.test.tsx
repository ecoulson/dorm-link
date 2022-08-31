import { fireEvent, render, screen } from '@testing-library/react';
import { randomUUID } from 'crypto';
import React from 'react';
import { anything, capture, instance, mock, reset, verify } from 'ts-mockito';
import { CommandType } from '../../../../core';
import { InputType } from '../../../base/input-type';
import { CommandDispatcher } from '../../../commands/command-dispatcher';
import { SearchListingViewModel } from '../search-listing-view-model';
import { SearchListingComponent } from './search-listing-component';

describe('Search Listing Component Test Suite', () => {
    const mockedDispatcher = mock(CommandDispatcher);

    beforeEach(() => {
        reset(mockedDispatcher);
    });

    test('Should render the search listing component with listings', () => {
        render(
            <SearchListingComponent
                model={
                    new SearchListingViewModel(
                        {
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
                                    id: randomUUID(),
                                    images: [
                                        'http://fake-domain.com/image.png',
                                    ],
                                    city: 'Seattle',
                                    school: 'Harvey Mudd College',
                                    price: '$100.00 / night',
                                },
                            ],
                            noResultsText: 'No results for this city.',
                            resultCountText: '1 listings found',
                        },
                        instance(mockedDispatcher)
                    )
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
                    new SearchListingViewModel(
                        {
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
                        },
                        instance(mockedDispatcher)
                    )
                }
            />
        );

        expect(screen.queryByText('No results for Seattle.')).toBeTruthy();
    });

    test('Should redirect the user to the new search page', () => {
        render(
            <SearchListingComponent
                model={
                    new SearchListingViewModel(
                        {
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
                            listingResults: [],
                            noResultsText: 'No results for Seattle.',
                            resultCountText: '1 listings found',
                        },
                        instance(mockedDispatcher)
                    )
                }
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

        verify(mockedDispatcher.dispatch(anything())).once();
        const [command] = capture(mockedDispatcher.dispatch).last();
        expect(command).toEqual({
            type: CommandType.Redirect,
            url: '/listing/search?city=Los%20Angeles',
        });
    });

    test('Should redirect to ', () => {
        const id = randomUUID();
        render(
            <SearchListingComponent
                model={
                    new SearchListingViewModel(
                        {
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
                                    id,
                                    images: [
                                        'http://fake-domain.com/image.png',
                                    ],
                                    city: 'Seattle',
                                    school: 'Harvey Mudd College',
                                    price: '$100.00 / night',
                                },
                            ],
                            noResultsText: 'No results for this city.',
                            resultCountText: '1 listings found',
                        },
                        instance(mockedDispatcher)
                    )
                }
            />
        );

        const college = screen.getByText('Harvey Mudd College');
        fireEvent.click(college);

        verify(mockedDispatcher.dispatch(anything())).once();
        const [command] = capture(mockedDispatcher.dispatch).last();
        expect(command).toEqual({
            type: CommandType.Redirect,
            url: `/listing/${id}`,
        });
    });
});
