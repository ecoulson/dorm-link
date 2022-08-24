import { ContactMethodRender } from './contact-method-renderer';

export interface ContactInformationRenderer {
    name: string;
    school: string;
    contactMethods: ContactMethodRender[];
}
