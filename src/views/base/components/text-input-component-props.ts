import { TextInputRenderer } from '../renderers/text-input-renderer';

export interface TextInputComponentProps {
    renderer: TextInputRenderer;
    onChange: (value: string) => void;
}
