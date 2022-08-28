import { CommandDispatcher } from '../../commands/command-dispatcher';
import { ViewModel } from '../../view-model';
import { SearchListingRenderer } from './renderers/search-listing-renderer';
import { SearchListingCommand } from './search-listing-command';

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
}
