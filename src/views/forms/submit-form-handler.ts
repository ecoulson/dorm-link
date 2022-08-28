import { EventEmitter } from '../../core';
import { CommandHandler } from '../commands/command-handler';
import { FormStorage } from './form-storage';
import { FormSubmittedEvent } from './form-submitted-event';
import { SubmitFormCommand } from './submit-form-command';

export class SubmitFormHandler implements CommandHandler {
    constructor(
        private readonly eventEmitter: EventEmitter,
        private readonly formStorage: FormStorage
    ) {}

    async handle(command: SubmitFormCommand): Promise<void> {
        const form = this.formStorage.getForm(command.formName);
        this.eventEmitter.fire(new FormSubmittedEvent(form));
    }
}
