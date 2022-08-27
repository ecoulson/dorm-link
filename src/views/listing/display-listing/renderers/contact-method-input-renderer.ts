import { ButtonRenderer } from '../../../base/renderers/button-renderer';
import { TextInputRenderer } from '../../../base/renderers/text-input-renderer';

export interface ContactMethodInputRender {
    email: TextInputRenderer;
    phoneNumber: TextInputRenderer;
    addEmailButton: ButtonRenderer;
    addPhoneNumber: ButtonRenderer;
}
