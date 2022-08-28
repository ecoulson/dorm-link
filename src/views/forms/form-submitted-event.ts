import { Event, EventType } from '../../core';
import { FormData } from './form-data';

export class FormSubmittedEvent implements Event {
    public type: EventType;

    constructor(public readonly data: FormData) {
        this.type = EventType.FormSubmitted;
    }
}
