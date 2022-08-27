import { ButtonRenderer } from '../../../base/renderers/button-renderer';
import { ListingFormSectionRenderer } from './listing-form-section-renderer';
import { ContactInformationFormSectionRenderer } from './contact-information-form-section-renderer';

export interface CreateListingRenderer {
    form: {
        name: string;
        sections: {
            listing: ListingFormSectionRenderer;
            contactInformation: ContactInformationFormSectionRenderer;
        };
        submit: ButtonRenderer;
    };
}
