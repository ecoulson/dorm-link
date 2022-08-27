import { TextInputRenderer } from '../../../base/renderers/text-input-renderer';
import { FormSectionHeaderRenderer } from '../../../forms/form-section-header-renderer';
import { ImageInputRenderer } from './image-input-renderer';

export interface ListingFormSectionRenderer {
    header: FormSectionHeaderRenderer;
    sections: {
        city: TextInputRenderer;
        price: TextInputRenderer;
        images: ImageInputRenderer;
    };
}
