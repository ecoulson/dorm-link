import { FormContent } from './form-content';
import { FormSectionHeaderRenderer } from './form-section-header-renderer';

export interface FormSectionRenderer {
    header: FormSectionHeaderRenderer;
    contents: FormContent[];
}
