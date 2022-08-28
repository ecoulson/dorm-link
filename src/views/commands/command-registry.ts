import { CommandType } from '../../core';
import { CommandHandler } from './command-handler';

export class CommandRegistry {
    private static registry: Map<CommandType, CommandHandler> = new Map();

    static reset() {
        this.registry = new Map();
    }

    static register(type: CommandType, handler: CommandHandler): boolean {
        this.registry.set(type, handler);
        return true;
    }

    static getHandler(type: CommandType): CommandHandler {
        if (!this.registry.has(type)) {
            throw new Error(
                `Unhandled command '${type}'. Please register it in the command registry`
            );
        }
        return this.registry.get(type) as CommandHandler;
    }
}
