import { CreateContactInfoParameters } from './contact-information/create-contact-info-parameters';
import { CreateListingParameters } from './create-listing-parameters';
import { Listing } from './listing';

export class ListingService {
    async create(
        contactInfo: CreateContactInfoParameters,
        listing: CreateListingParameters
    ): Promise<Listing> {
        throw new Error();
    }

    async getById(id: string): Promise<Listing> {
        throw new Error();
    }

    async search(city: string): Promise<Listing[]> {
        throw new Error();
    }
}
