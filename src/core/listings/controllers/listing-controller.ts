import { Listing } from '../models/listing';
import { CreateListingRequest } from '../requests/create-listing-request';
import { ListingService } from '../services/listing-service';
import { SearchListingsRequest } from '../requests/search-listings-request';
import { GetListingRequest } from '../requests/get-listing-request';
import { Injectable } from 'noose-injection';
import { ListingServiceAnnotation } from '../listing-annotations';
import { RedirectCommand } from '../../navigation/redirect-command';

@Injectable()
export class ListingController {
    constructor(
        @ListingServiceAnnotation.inject()
        private readonly service: ListingService
    ) {}

    async create(request: CreateListingRequest): Promise<RedirectCommand> {
        return this.service.create(request.contactInformation, request.listing);
    }

    async getById(request: GetListingRequest): Promise<Listing> {
        return this.service.getById(request.id);
    }

    async search(request: SearchListingsRequest): Promise<Listing[]> {
        return this.service.search(request.city);
    }
}
