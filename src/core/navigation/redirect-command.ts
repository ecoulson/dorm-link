import { Command } from '../commands/command';
import { CommandType } from '../commands/command-type';

export class RedirectCommand implements Command {
    public readonly type: CommandType;

    constructor(public readonly url: string) {
        this.type = CommandType.Redirect;
    }
}
