import { LandlordParameters } from './landlord-parameters';

export interface LandlordInviteRequest {
    listingId: string;
    landlord: LandlordParameters;
}
