import { Command, EventEmitter } from '../../core';
import { CommandEvent } from './command-event';

export class CommandDispatcher {
    constructor(private readonly eventEmitter: EventEmitter) {}

    dispatch(command: Command): boolean {
        this.eventEmitter.fire(new CommandEvent(command));
        return true;
    }
}
