import { CreateContactInfoParameters } from '../contact-information/create-contact-info-parameters';
import { CreateListingParameters } from './create-listing-parameters';

export interface CreateListingRequest {
    listing: CreateListingParameters;
    contactInformation: CreateContactInfoParameters;
}
