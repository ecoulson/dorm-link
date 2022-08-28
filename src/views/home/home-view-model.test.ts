import { anything, capture, instance, mock, reset, verify } from 'ts-mockito';
import { CommandDispatcher } from '../commands/command-dispatcher';
import { SearchListingCommand } from '../listing/search-listing/search-listing-command';
import { HomeViewModel } from './home-view-model';
import { HomeRenderer } from './renderers/home-renderer';

describe('Home View Model Test Suite', () => {
    const mockedDispatcher = mock(CommandDispatcher);

    beforeEach(() => {
        reset(mockedDispatcher);
    });

    test('Should dispatch a search command', () => {
        const model = new HomeViewModel(
            {} as HomeRenderer,
            instance(mockedDispatcher)
        );

        model.search('Los Angeles');

        verify(mockedDispatcher.dispatch(anything())).once();
        const [command] = capture(mockedDispatcher.dispatch).last();
        expect(command).toEqual(new SearchListingCommand('Los Angeles'));
    });
});
