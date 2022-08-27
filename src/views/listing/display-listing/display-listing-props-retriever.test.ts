import { instance, mock, reset, verify, when } from 'ts-mockito';
import { DisplayListingRender } from './renderers/display-listing-renderer';
import { DisplayListingPropsRetriever } from './display-listing-props-retriever';
import { ListingView } from '../listing-view';

describe('Display Listing Props Retriever Test Suite', () => {
    const mockedListingView = mock(ListingView);
    const retriever = new DisplayListingPropsRetriever(
        instance(mockedListingView)
    );

    beforeEach(() => {
        reset(mockedListingView);
    });

    test('Should get props for the listing', async () => {
        when(mockedListingView.buildDisplayListingView('id')).thenResolve(
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
        verify(mockedListingView.buildDisplayListingView('id')).once();
    });

    test('Should get not found for the listing with no query parameters', async () => {
        when(mockedListingView.buildDisplayListingView('id')).thenResolve(
            {} as any
        );
        const props = await retriever.retrieve({
            pathname: '',
            query: {},
        });

        expect(props).toEqual({
            notFound: true,
        });
        verify(mockedListingView.buildDisplayListingView('id')).never();
    });
});
