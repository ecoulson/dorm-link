import { Command } from '../commands/command';
import { CommandType } from '../commands/command-type';
import { Toast } from './toast';

export class ToastCommand implements Command {
    public readonly type: CommandType;

    constructor(public readonly toast: Toast) {
        this.type = CommandType.Toast
    }
}
