import { Builder } from 'builder-pattern';
import { Optional } from '../../../common/optional';
import { Command } from '../../../core';
import { ButtonRenderer } from '../renderers/button-renderer';

export class ButtonRendererFiller {
    fill(
        text: string,
        command: Optional<Command> = Optional.empty()
    ): ButtonRenderer {
        const builder = Builder<ButtonRenderer>().text(text);
        if (command.isPresent()) {
            const serializedCommand = JSON.parse(
                JSON.stringify(command.get())
            ) as Command;
            builder.command(serializedCommand);
        }
        return builder.build();
    }
}
