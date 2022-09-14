import { UpdateListingEvent } from './update-listing-event';

export class ApproveListingEvent extends UpdateListingEvent {
    constructor(listingId: string) {
        super({
            id: listingId,
            approval: {
                approved: true,
            },
        });
    }
}
