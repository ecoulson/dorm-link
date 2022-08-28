import { anything, capture, instance, mock, reset, verify } from 'ts-mockito';
import { CommandDispatcher } from '../../commands/command-dispatcher';
import { SearchListingRenderer } from './renderers/search-listing-renderer';
import { SearchListingCommand } from './search-listing-command';
import { SearchListingViewModel } from './search-listing-view-model';

describe('Search Listing View Model Test Suite', () => {
    const mockedDispatcher = mock(CommandDispatcher);

    beforeEach(() => {
        reset(mockedDispatcher);
    });

    test('Should dispatch a search command', () => {
        const model = new SearchListingViewModel(
            {} as SearchListingRenderer,
            instance(mockedDispatcher)
        );

        model.search('Los Angeles');

        verify(mockedDispatcher.dispatch(anything())).once();
        const [command] = capture(mockedDispatcher.dispatch).last();
        expect(command).toEqual(new SearchListingCommand('Los Angeles'));
    });
});
