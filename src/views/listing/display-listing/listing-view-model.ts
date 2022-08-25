import { ViewModel } from '../../view-model';
import { DisplayListingRender } from './display-listing-renderer';

export class ListingViewModel implements ViewModel {
    constructor(private readonly renderer: DisplayListingRender) {}

    render(): DisplayListingRender {
        return this.renderer;
    }
}
