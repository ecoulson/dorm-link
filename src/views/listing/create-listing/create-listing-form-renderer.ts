import { ContactMethodInputRender } from '../contact-information/contact-method-input-renderer';
import { InputRenderer } from '../../base/input-renderer';
import { ImageInputRenderer } from './image-input-renderer';

export interface CreateListingFormRenderer {
    form: {
        sections: {
            listing: {
                city: InputRenderer;
                price: InputRenderer;
                image: ImageInputRenderer;
            };
            contactInformation: {
                name: InputRenderer;
                school: InputRenderer;
                contactMethods: ContactMethodInputRender[];
            };
        };
    };
}
