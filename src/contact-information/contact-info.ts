import { ContactMethod } from './contact-method';

export class ContactInfo {
    constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly contactMethods: ContactMethod[]
    ) {}
}
