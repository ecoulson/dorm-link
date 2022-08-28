import { anything, capture, instance, mock, verify, when } from 'ts-mockito';
import { EventEmitter, EventType } from '../../core';
import { FormData } from './form-data';
import { FormStorage } from './form-storage';
import { FormSubmittedEvent } from './form-submitted-event';
import { SubmitFormCommand } from './submit-form-command';
import { SubmitFormHandler } from './submit-form-handler';

describe('Submit Form Handler Test Suite', () => {
    const mockedEventEmitter = mock(EventEmitter);
    const mockedFormStorage = mock(FormStorage);
    const handler = new SubmitFormHandler(
        instance(mockedEventEmitter),
        instance(mockedFormStorage)
    );

    test('Should submit a form and emit an event with the form data', () => {
        when(mockedFormStorage.getForm<any>('form-name')).thenReturn({
            name: 'name',
        } as FormData);
        const command = new SubmitFormCommand('form-name');

        handler.handle(command);

        verify(mockedEventEmitter.fire(anything())).once();
        verify(mockedFormStorage.getForm('form-name')).once();
        const [event] = capture(mockedEventEmitter.fire).last();
        expect(event).toEqual(
            new FormSubmittedEvent({
                name: 'name',
            })
        );
    });
});
