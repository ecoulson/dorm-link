import { Landlord } from './landlord';
import { LandlordAction } from './landlord-action';
import { LandlordApprovalActionRequest } from './requests/landlord-approval-action-request';
import { LandlordInviteRequest } from './requests/landlord-inivite-request';

export class LandlordController {
    invite(request: LandlordInviteRequest): Promise<Landlord> {
        throw new Error();
    }

    accept(request: LandlordApprovalActionRequest): Promise<LandlordAction> {
        throw new Error();
    }

    decline(request: LandlordApprovalActionRequest): Promise<LandlordAction> {
        throw new Error();
    }
}
