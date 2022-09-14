import { ContactInformation } from '../contact-information/contact-information';
import { ListingApproval } from './listing-approval';

export class Listing {
    constructor(
        public readonly id: string,
        public readonly contactInformation: ContactInformation,
        public readonly city: string,
        public readonly images: string[],
        public readonly price: number,
        public readonly approval: ListingApproval
    ) {}
}
