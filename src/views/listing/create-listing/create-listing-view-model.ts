import { ViewModel } from '../../view-model';
import { CreateListingFormRenderer } from './renderers/create-listing-form-renderer';

export class CreateListingViewModel implements ViewModel {
    constructor(private readonly renderer: CreateListingFormRenderer) {}

    render(): CreateListingFormRenderer {
        return this.renderer;
    }
}
