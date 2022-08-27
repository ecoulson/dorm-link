import { ButtonRenderer } from '../../../base/renderers/button-renderer';
import { InputRenderer } from '../../../base/renderers/input-renderer';
import { TextInputRenderer } from '../../../base/renderers/text-input-renderer';

export interface ContactMethodInputRender extends InputRenderer {
    email: TextInputRenderer;
    phoneNumber: TextInputRenderer;
    addEmailButton: ButtonRenderer;
    addPhoneNumber: ButtonRenderer;
}
