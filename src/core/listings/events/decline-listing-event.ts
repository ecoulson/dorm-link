import { UpdateListingEvent } from './update-listing-event';

export class DeclineListingEvent extends UpdateListingEvent {
    constructor(listingId: string) {
        super({
            id: listingId,
            approval: {
                approved: false,
            },
        });
    }
}
