import { ContactMethod } from './contact-method';
import { ContactMethodType } from './contact-method-type';

export class EmailContactMethod implements ContactMethod {
    constructor(public readonly id: string, public readonly value: string) {}

    get type(): ContactMethodType {
        return ContactMethodType.Email;
    }
}
