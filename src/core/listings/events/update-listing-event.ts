import { Event } from '../../events/event';
import { EventType } from '../../events/event-type';
import { ListingUpdate } from './listing-update';

export class UpdateListingEvent extends Event<ListingUpdate> {
    constructor(data: ListingUpdate) {
        super(EventType.UpdateListing, data);
    }
}
