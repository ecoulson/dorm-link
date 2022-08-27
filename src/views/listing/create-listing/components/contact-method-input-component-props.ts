import { ContactMethodInputRender } from '../../display-listing/renderers/contact-method-input-renderer';
import { ContactMethodForm } from '../contact-method-form';

export interface ContactMethodInputComponentProps {
    renderer: ContactMethodInputRender;
    onChange: (contactMethods: ContactMethodForm[]) => void;
}
