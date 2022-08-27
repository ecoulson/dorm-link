import { ButtonRenderer } from '../../base/renderers/button-renderer';
import { FormSectionRenderer } from './form-section-renderer';

export interface FormRenderer {
    name: string;
    sections: FormSectionRenderer[];
    submit: ButtonRenderer;
}
