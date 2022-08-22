import { ContactInfo } from './contact-information/contact-info';

export class Listing {
    constructor(
        public readonly id: string,
        public readonly contactInfo: ContactInfo,
        public readonly city: string,
        public readonly images: string[],
        public readonly price: number
    ) {}
}
