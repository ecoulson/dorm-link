import { Command, EventType, Event } from '../../core';

export class CommandEvent extends Event<Command> {
    constructor(data: Command) {
        super(EventType.Command, data);
    }
}
