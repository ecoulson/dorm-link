import { Event } from '../../events/event';
import { EventType } from '../../events/event-type';
import { ApprovalAction } from '../models/approval-action';

export class DeclineListingEvent extends Event<ApprovalAction> {
    constructor(listingId: string, landlordId: string) {
        super(EventType.ListingDeclined, {
            landlordId,
            listingId,
            approval: false,
        });
    }
}
