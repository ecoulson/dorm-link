import { RedirectCommand } from '../../core';
import { CommandDispatcher } from '../commands/command-dispatcher';
import { SearchListingCommand } from '../listing/search-listing/search-listing-command';
import { ViewModel } from '../view-model';
import { HomeRenderer } from './renderers/home-renderer';

export class HomeViewModel implements ViewModel {
    constructor(
        private readonly renderer: HomeRenderer,
        private readonly dispatcher: CommandDispatcher
    ) {}

    render(): HomeRenderer {
        return this.renderer;
    }

    search(city: string) {
        this.dispatcher.dispatch(new SearchListingCommand(city));
    }
}
