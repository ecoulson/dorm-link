import { FormData } from '../../forms/form-data';
import { ContactMethodFormData } from './contact-method-form-data';

export interface CreateListingFormData extends FormData {
    listing: {
        city: string;
        price: string;
        images: string[];
    };
    contactInformation: {
        name: string;
        school: string;
        contactMethods: ContactMethodFormData[];
    };
}
