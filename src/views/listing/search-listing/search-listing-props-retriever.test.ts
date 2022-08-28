import { anything, instance, mock, reset, when } from 'ts-mockito';
import { InputType } from '../../base/input-type';
import { ListingView } from '../listing-view';
import { SearchListingPropsRetriever } from './search-listing-props-retriever';

describe('Search Listing Props Retriever', () => {
    const mockedView = mock(ListingView);
    const retriever = new SearchListingPropsRetriever(instance(mockedView));

    beforeEach(() => {
        reset(mockedView);
    });

    test('Should retrieve the search listing view when a city is present', async () => {
        when(mockedView.buildSearchListingView('Seattle')).thenResolve({
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
        });

        const props = await retriever.retrieve({
            pathname: '',
            query: {
                city: 'Seattle',
            },
        });

        expect(props).toMatchObject({
            props: {
                renderer: {},
            },
        });
    });

    test('Should indicate that there are no results when there is no city provided', async () => {
        when(mockedView.buildSearchListingView(anything())).thenResolve({
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
            noResultsText: 'No results for this city.',
            resultCountText: '0 listings found',
        });

        const props = await retriever.retrieve({
            pathname: '',
            query: {},
        });

        expect(props).toMatchObject({
            props: {
                renderer: {
                    listingResults: [],
                },
            },
        });
    });
});
