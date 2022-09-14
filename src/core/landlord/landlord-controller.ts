import { Injectable } from 'noose-injection';
import { Landlord } from './models/landlord';
import { LandlordAction } from './models/landlord-action';
import { LandlordServiceAnnotation } from './landlord-annotations';
import { LandlordService } from './landlord-service';
import { LandlordApprovalActionRequest } from './requests/landlord-approval-action-request';
import { LandlordInviteRequest } from './requests/landlord-inivite-request';

@Injectable()
export class LandlordController {
    constructor(
        @LandlordServiceAnnotation.inject()
        private readonly service: LandlordService
    ) {}

    invite(request: LandlordInviteRequest): Promise<Landlord> {
        return this.service.invite(request.listingId, request.landlord);
    }

    accept(request: LandlordApprovalActionRequest): Promise<LandlordAction> {
        return this.service.accept(request);
    }

    decline(request: LandlordApprovalActionRequest): Promise<LandlordAction> {
        return this.service.decline(request);
    }
}
