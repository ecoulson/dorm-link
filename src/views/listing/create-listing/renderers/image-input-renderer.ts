import { ButtonRenderer } from '../../../base/renderers/button-renderer';
import { TextInputRenderer } from '../../../base/renderers/text-input-renderer';

export interface ImageInputRenderer {
    url: TextInputRenderer;
    addImageButton: ButtonRenderer;
}
