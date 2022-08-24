import { InputType } from './input-type';

export interface InputRenderer {
    label: string;
    name: string;
    type: InputType;
    placeholder?: string;
}
