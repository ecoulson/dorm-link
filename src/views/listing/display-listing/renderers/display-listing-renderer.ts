import { ContactInformationRenderer } from './contact-information-renderer';
import { ListingRenderer } from '../listing-renderer';

export interface DisplayListingRender {
    listing: ListingRenderer;
    contactInformation: ContactInformationRenderer;
}
