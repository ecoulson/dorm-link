import { ContactMethodType } from './contact-method-type';

export interface CreateContactMethodParameters {
    value: string;
    type: ContactMethodType;
}
