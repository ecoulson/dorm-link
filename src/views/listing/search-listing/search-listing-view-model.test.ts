import {
    anyOfClass,
    anything,
    capture,
    instance,
    mock,
    reset,
    verify,
} from 'ts-mockito';
import { CommandDispatcher } from '../../commands/command-dispatcher';
import { ListingSearchResultRenderer } from './renderers/listing-search-result-renderer';
import { SearchListingRenderer } from './renderers/search-listing-renderer';
import { SearchListingCommand } from './search-listing-command';
import { SearchListingViewModel } from './search-listing-view-model';
import { ViewListingCommand } from './view-listing-command';

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

        verify(
            mockedDispatcher.dispatch(anyOfClass(SearchListingCommand))
        ).once();
        const [command] = capture(mockedDispatcher.dispatch).last();
        expect(command).toEqual(new SearchListingCommand('Los Angeles'));
    });

    test('Should dispatch a view listing command', () => {
        const model = new SearchListingViewModel(
            {} as SearchListingRenderer,
            instance(mockedDispatcher)
        );

        model.viewListingSearchResult({
            id: 'id',
        } as ListingSearchResultRenderer);

        verify(
            mockedDispatcher.dispatch(anyOfClass(ViewListingCommand))
        ).once();
        const [command] = capture(mockedDispatcher.dispatch).last();
        expect(command).toEqual(new ViewListingCommand('id'));
    });
});
