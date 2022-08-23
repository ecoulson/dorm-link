import { ContactMethod } from './contact-method';

export class ContactInformation {
    constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly school: string,
        public readonly contactMethods: ContactMethod[]
    ) {}
}
