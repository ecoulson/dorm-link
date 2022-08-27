import { Optional } from '../../../common/optional';
import { TextInputRenderer } from '../renderers/text-input-renderer';

export interface TextInputComponentProps {
    renderer: TextInputRenderer;
    value: Optional<string>;
    onChange: (value: string) => void;
}
