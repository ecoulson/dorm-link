import { Listing } from './listing';
import { CreateListingRequest } from './create-listing-request';
import { ListingService } from './listing-service';
import { SearchListingsRequest } from './search-listings-request';
import { GetListingRequest } from './get-listing-request';
import { Injectable } from 'noose-injection';
import { ListingServiceAnnotation } from './listing-annotations';

@Injectable()
export class ListingController {
    constructor(
        @ListingServiceAnnotation.inject()
        private readonly service: ListingService
    ) {}

    async create(request: CreateListingRequest): Promise<Listing> {
        return this.service.create(request.contactInfo, request.listing);
    }

    async getById(request: GetListingRequest): Promise<Listing> {
        return this.service.getById(request.id);
    }

    async search(request: SearchListingsRequest): Promise<Listing[]> {
        return this.service.search(request.city);
    }
}
