import { Command, Event, EventType } from '../../core';

export class CommandEvent implements Event<Command> {
    public readonly type: EventType;

    constructor(public readonly data: Command) {
        this.type = EventType.Command;
    }
}
