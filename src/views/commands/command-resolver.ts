import { EventEmitter } from '../event/event-emitter';
import { EventType } from '../event/event-type';
import { Command } from './command';
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
