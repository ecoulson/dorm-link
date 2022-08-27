import { ContactMethodInputRender } from '../../display-listing/renderers/contact-method-input-renderer';
import { ContactMethodFormData } from '../contact-method-form-data';

export interface ContactMethodInputComponentProps {
    renderer: ContactMethodInputRender;
    onChange: (contactMethods: ContactMethodFormData[]) => void;
}
