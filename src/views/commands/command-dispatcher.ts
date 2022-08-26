import { EventEmitter } from '../events/event-emitter';
import { Command } from './command';
import { CommandEvent } from './command-event';

export class CommandDispatcher {
    constructor(private readonly eventEmitter: EventEmitter) {}

    dispatch(command: Command): boolean {
        this.eventEmitter.fire(new CommandEvent(command));
        return true;
    }
}
