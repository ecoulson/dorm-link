import { Event, EventType, RedirectCommand } from '../../../core';

export class ListingCreatedEvent extends Event<RedirectCommand> {
    constructor(data: RedirectCommand) {
        super(EventType.Command, data);
    }
}
