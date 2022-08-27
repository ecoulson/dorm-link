import { ViewModel } from '../../view-model';
import { CreateListingRenderer } from './renderers/create-listing-renderer';

export class CreateListingViewModel implements ViewModel {
    constructor(private readonly renderer: CreateListingRenderer) {}

    render(): CreateListingRenderer {
        return this.renderer;
    }
}
