import { ButtonRenderer } from '../../base/button-renderer';
import { InputRenderer } from '../../base/input-renderer';

export interface ContactMethodInputRender {
    email: InputRenderer;
    phoneNumber: InputRenderer;
    addEmailButton: ButtonRenderer;
    addPhoneNumber: ButtonRenderer;
}
