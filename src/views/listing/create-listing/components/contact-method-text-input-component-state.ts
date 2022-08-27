import { ContactMethodType } from '../../../../core';
import { TextInputRenderer } from '../../../base/renderers/text-input-renderer';

export interface ContactMethodTextInputComponentState {
    renderer: TextInputRenderer;
    value: string;
    id: string;
    type: ContactMethodType;
}
