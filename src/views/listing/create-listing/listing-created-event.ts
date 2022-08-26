import { Event, EventType, RedirectCommand } from '../../../core';

export class ListingCreatedEvent implements Event {
    public readonly type: EventType;

    constructor(public readonly data: RedirectCommand) {
        this.type = EventType.ListingCreated;
    }
}
