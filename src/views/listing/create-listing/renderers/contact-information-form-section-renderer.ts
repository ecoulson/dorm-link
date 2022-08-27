import { TextInputRenderer } from '../../../base/renderers/text-input-renderer';
import { ContactMethodInputRender } from '../../display-listing/renderers/contact-method-input-renderer';
import { FormSectionHeaderRenderer } from '../../../forms/form-section-header-renderer';

export interface ContactInformationFormSectionRenderer {
    header: FormSectionHeaderRenderer;
    sections: {
        name: TextInputRenderer;
        school: TextInputRenderer;
        contactMethods: ContactMethodInputRender;
    };
}
