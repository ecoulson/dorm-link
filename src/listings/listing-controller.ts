import { randomUUID } from 'crypto';
import { ContactInfo } from '../contact-information/contact-info';
import { Listing } from './listing';
import { ListingFormData } from './listing-form-data';
import { ListingService } from './listing-service';

export class ListingController {
    constructor(private readonly service: ListingService) {}

    async createFromListingForm(
        contactInfo: ContactInfo,
        listingData: ListingFormData
    ): Promise<Listing> {
        const listing = new Listing(
            randomUUID(),
            contactInfo,
            listingData.city,
            listingData.images,
            listingData.price
        );
        return this.service.create(listing);
    }
}
