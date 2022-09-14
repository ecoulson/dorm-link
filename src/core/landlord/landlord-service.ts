import { Injectable } from 'noose-injection';
import { Landlord } from './landlord';
import { LandlordAction } from './landlord-action';
import { LandlordApprovalActionRequest } from './requests/landlord-approval-action-request';
import { LandlordParameters } from './requests/landlord-parameters';

@Injectable()
export class LandlordService {
    invite(
        listingId: string,
        landlordParameters: LandlordParameters
    ): Promise<Landlord> {
        throw new Error();
    }

    accept(request: LandlordApprovalActionRequest): Promise<LandlordAction> {
        throw new Error();
    }

    decline(request: LandlordApprovalActionRequest): Promise<LandlordAction> {
        throw new Error();
    }
}
