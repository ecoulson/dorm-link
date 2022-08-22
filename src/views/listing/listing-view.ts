import { ListingController } from '../../core/listings/listing-controller';
import { DisplayListingViewModel } from './display-listing-view-model';

export class ListingView {
    constructor(private readonly listingController: ListingController) {}

    async displayListing(id: string): Promise<DisplayListingViewModel> {
        const listing = await this.listingController.getById(id);
        return {
            listing: {
                city: listing.city,
                price: `$${(listing.price / 100).toPrecision(2)}`,
                images: listing.images,
            },
            contactInfo: {
                name: listing.contactInfo.name,
                school: listing.contactInfo.school,
                contactMethods: listing.contactInfo.contactMethods.map(
                    (method) => {
                        return {
                            type: method.type,
                            value: method.value,
                        };
                    }
                ),
            },
        };
    }
}