import { InputRenderer } from './input-renderer';

export interface TextInputRenderer extends InputRenderer {
    label: string;
    name: string;
    placeholder?: string;
}
