import { Builder } from 'builder-pattern';
import { Optional } from '../../../common/optional';
import { InputType } from '../input-type';
import { TextInputRenderer } from '../renderers/text-input-renderer';

export class TextInputRendererFiller {
    fill(
        name: string,
        label: string,
        placeholder: Optional<string> = Optional.empty()
    ): TextInputRenderer {
        const builder = Builder<TextInputRenderer>()
            .name(name)
            .label(label)
            .type(InputType.TEXT);
        if (placeholder.isPresent()) {
            builder.placeholder(placeholder.get());
        }
        return builder.build();
    }
}
