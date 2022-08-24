import { ButtonRenderer } from '../../base/button-renderer';
import { InputRenderer } from '../../base/input-renderer';

export interface ImageInputRenderer {
    url: InputRenderer;
    addImageButton: ButtonRenderer;
}
