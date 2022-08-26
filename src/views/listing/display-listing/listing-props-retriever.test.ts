import { instance, mock, reset, verify, when } from 'ts-mockito';
import { DisplayListingRender } from './renderers/display-listing-renderer';
import { ListingPropsRetriever } from './listing-props-retriever';
import { ListingView } from './listing-view';

describe('Listing Props Retriever Test Suite', () => {
    const mockedListingView = mock(ListingView);
    const retriever = new ListingPropsRetriever(instance(mockedListingView));

    beforeEach(() => {
        reset(mockedListingView);
    });

    test('Should get props for the listing', async () => {
        when(mockedListingView.displayListing('id')).thenResolve(
            {} as DisplayListingRender
        );
        const props = await retriever.retrieve({
            pathname: '',
            query: {
                id: 'id',
            },
        });

        expect(props).toMatchObject({
            props: {
                renderer: {},
            },
        });
        verify(mockedListingView.displayListing('id')).once();
    });

    test('Should get not found for the listing with no query parameters', async () => {
        when(mockedListingView.displayListing('id')).thenResolve({} as any);
        const props = await retriever.retrieve({
            pathname: '',
            query: {},
        });

        expect(props).toEqual({
            notFound: true,
        });
        verify(mockedListingView.displayListing('id')).never();
    });
});
