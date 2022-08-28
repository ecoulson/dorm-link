import { ViewModel } from '../../view-model';
import { SearchListingRenderer } from './renderers/search-listing-renderer';

export class SearchListingViewModel implements ViewModel {
    constructor(private readonly renderer: SearchListingRenderer) {}

    render(): SearchListingRenderer {
        return this.renderer;
    }
}
