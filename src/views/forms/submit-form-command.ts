import { Command, CommandType } from '../../core';

export class SubmitFormCommand implements Command {
    public readonly type: CommandType;

    constructor(public readonly formName: string) {
        this.type = CommandType.SubmitForm;
    }
}
