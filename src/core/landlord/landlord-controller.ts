import { Injectable } from 'noose-injection';
import { Landlord } from './models/landlord';
import { LandlordServiceAnnotation } from './landlord-annotations';
import { LandlordService } from './landlord-service';
import { LandlordApprovalActionRequest } from './requests/landlord-approval-action-request';
import { LandlordInviteRequest } from './requests/landlord-inivite-request';
import { RedirectCommand } from '../navigation/redirect-command';
import { ToastCommand } from '../alerts/toast-command';

@Injectable()
export class LandlordController {
    constructor(
        @LandlordServiceAnnotation.inject()
        private readonly service: LandlordService
    ) {}

    invite(request: LandlordInviteRequest): Promise<ToastCommand> {
        return this.service.invite(request.listingId, request.landlord);
    }

    accept(request: LandlordApprovalActionRequest): Promise<RedirectCommand> {
        return this.service.accept(request.listingId, request.landlordId);
    }

    decline(request: LandlordApprovalActionRequest): Promise<ToastCommand> {
        return this.service.decline(request.listingId, request.landlordId);
    }
}
