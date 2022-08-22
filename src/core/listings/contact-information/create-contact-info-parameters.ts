import { CreateContactMethodParameters } from './create-contact-method-parameters';

export interface CreateContactInfoParameters {
    name: string;
    school: string;
    methods: CreateContactMethodParameters[];
}
