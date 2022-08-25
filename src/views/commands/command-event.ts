import { Event } from '../event/event';
import { EventType } from '../event/event-type';
import { Command } from './command';

export class CommandEvent implements Event<Command> {
    public readonly type: EventType;

    constructor(public readonly data: Command) {
        this.type = EventType.Command;
    }
}
