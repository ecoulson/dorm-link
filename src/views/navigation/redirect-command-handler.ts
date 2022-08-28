import { NextRouter } from 'next/router';
import { RedirectCommand } from '../../core';
import { CommandHandler } from '../commands/command-handler';

export class RedirectCommandHandler implements CommandHandler {
    constructor(private readonly router: NextRouter) {}

    async handle(command: RedirectCommand): Promise<void> {
        this.router.push(command.url);
    }
}
