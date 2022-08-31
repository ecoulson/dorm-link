import { Command } from '../../core';

export interface CommandHandler {
    handle(command: Command): Promise<void>;
}
