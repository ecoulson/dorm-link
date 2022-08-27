import { instance, mock, reset, verify } from 'ts-mockito';
import { ListingView } from '../listing-view';
import { CreateListingPropsRetriever } from './create-listing-props-retriever';

describe('Create Listing Props Retriever', () => {
    const mockedView = mock(ListingView);
    const retriever = new CreateListingPropsRetriever(instance(mockedView));

    beforeEach(() => {
        reset(mockedView);
    });

    test('Should retrieve the props for the create listing view', async () => {
        const props = await retriever.retrieve();

        expect(props).toMatchObject({
            props: {
                renderer: {},
            },
        });
        verify(mockedView.buildCreateListingFormView()).once();
    });
});
