import { Event } from '../../events/event';
import { EventType } from '../../events/event-type';
import { ApprovalAction } from '../models/approval-action';

export class ApproveListingEvent extends Event<ApprovalAction> {
    constructor(listingId: string, landlordId: string) {
        super(EventType.ListingApproved, {
            landlordId,
            listingId,
            approval: true,
        });
    }
}
