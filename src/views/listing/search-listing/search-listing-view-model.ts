import { CommandDispatcher } from '../../commands/command-dispatcher';
import { ViewModel } from '../../view-model';
import { ListingSearchResultRenderer } from './renderers/listing-search-result-renderer';
import { SearchListingRenderer } from './renderers/search-listing-renderer';
import { SearchListingCommand } from './search-listing-command';
import { ViewListingCommand } from './view-listing-command';

export class SearchListingViewModel implements ViewModel {
    constructor(
        private readonly renderer: SearchListingRenderer,
        private readonly dispatcher: CommandDispatcher
    ) {}

    render(): SearchListingRenderer {
        return this.renderer;
    }

    search(city: string): void {
        this.dispatcher.dispatch(new SearchListingCommand(city));
    }

    viewListingSearchResult(result: ListingSearchResultRenderer): void {
        this.dispatcher.dispatch(new ViewListingCommand(result.id));
    }
}
