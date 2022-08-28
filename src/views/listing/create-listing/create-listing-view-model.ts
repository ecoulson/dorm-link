import { CommandDispatcher } from '../../commands/command-dispatcher';
import { ViewModel } from '../../view-model';
import { CreateListingCommand } from './create-listing-command';
import { CreateListingFormData } from './create-listing-form-data';
import { CreateListingRenderer } from './renderers/create-listing-renderer';

export class CreateListingViewModel implements ViewModel {
    constructor(
        private readonly renderer: CreateListingRenderer,
        private readonly dispatcher: CommandDispatcher
    ) {}

    render(): CreateListingRenderer {
        return this.renderer;
    }

    createListing(form: CreateListingFormData) {
        this.dispatcher.dispatch(
            new CreateListingCommand({
                ...form,
                listing: {
                    ...form.listing,
                    price: Math.round(parseFloat(form.listing.price) * 100),
                },
            })
        );
    }
}
