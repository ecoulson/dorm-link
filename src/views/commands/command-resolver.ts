import { EventEmitter, EventType } from '../../core';
import { CommandEvent } from './command-event';
import { CommandRegistry } from './command-registry';

export class CommandResolver {
    constructor(private readonly eventEmitter: EventEmitter) {}

    setup() {
        this.eventEmitter.on(EventType.Command, {
            handle: ({ data: command }: CommandEvent) => {
                CommandRegistry.getHandler(command.type).handle(command);
            },
        });
    }
}
