import { Optional } from '../../../common/optional';
import { CommandDispatcher } from '../../commands/command-dispatcher';
import { ButtonRenderer } from '../renderers/button-renderer';

export interface ButtonComponentProps {
    renderer: ButtonRenderer;
    onClick: Optional<() => void>;
}
