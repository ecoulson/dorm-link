import { Injectable } from 'noose-injection';
import { ListingController } from '../../core/listings/listing-controller';
import { ListingLibraryAnnotation } from '../core-library-annotation';
import { ListingViewModel } from './listing-view-model';

@Injectable()
export class ListingView {
    constructor(
        @ListingLibraryAnnotation.inject()
        private readonly listingController: ListingController
    ) {}

    async displayListing(id: string): Promise<ListingViewModel> {
        const listing = await this.listingController.getById({ id });
        return {
            listing: {
                city: listing.city,
                price: `$${(listing.price / 100).toFixed(2)} / night`,
                images: listing.images,
            },
            contactInfo: {
                name: listing.contactInformation.name,
                school: listing.contactInformation.school,
                contactMethods: listing.contactInformation.contactMethods.map(
                    (method) => {
                        return {
                            label: method.type,
                            value: method.value,
                        };
                    }
                ),
            },
        };
    }
}
