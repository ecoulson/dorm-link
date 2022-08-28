import { instance, mock, reset } from 'ts-mockito';
import { HomePropsRetriever } from './home-props-retriever';
import { HomeView } from './home-view';

describe('Home Props Retriever Test Suite', () => {
    const mockedView = mock(HomeView);
    const retriever = new HomePropsRetriever(instance(mockedView));

    beforeEach(() => {
        reset(mockedView);
    });

    test('Should retrieve the home page', async () => {
        const props = await retriever.retrieve();

        expect(props).toMatchObject({
            props: {
                renderer: {},
            },
        });
    });
});
