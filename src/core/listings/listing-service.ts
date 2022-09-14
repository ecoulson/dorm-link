import { Injectable } from 'noose-injection';
import { UUIDGeneratorAnnotation } from '../identifiers/identifier-annotations';
import { UUIDGenerator } from '../identifiers/uuid-generator';
import { RedirectCommand } from '../navigation/redirect-command';
import { ContactInformation } from './contact-information/contact-information';
import { ContactMethodType } from './contact-information/contact-method-type';
import { CreateContactInfoParameters } from './contact-information/create-contact-info-parameters';
import { CreateContactMethodParameters } from './contact-information/create-contact-method-parameters';
import { EmailContactMethod } from './contact-information/email-contact-method';
import { PhoneContactMethod } from './contact-information/phone-contact-method';
import { CreateListingParameters } from './create-listing-parameters';
import { Listing } from './listing';
import { ListingBrokerAnnotation } from './listing-annotations';
import { ListingApproval } from './listing-approval';
import { ListingBroker } from './listing-broker';

@Injectable()
export class ListingService {
    constructor(
        @ListingBrokerAnnotation.inject()
        private readonly listingBroker: ListingBroker,
        @UUIDGeneratorAnnotation.inject()
        private readonly uuidGenerator: UUIDGenerator
    ) {}

    async create(
        contactInfoParameters: CreateContactInfoParameters,
        listingParameters: CreateListingParameters
    ): Promise<RedirectCommand> {
        const status = await this.listingBroker.insert(
            new Listing(
                this.uuidGenerator.generate(),
                this.createContactInfo(contactInfoParameters),
                listingParameters.city,
                listingParameters.images,
                listingParameters.price,
                new ListingApproval(this.uuidGenerator.generate(), false)
            )
        );
        return new RedirectCommand(`/listing/${status.value().id}`);
    }

    private createContactInfo(
        contactInfoParameters: CreateContactInfoParameters
    ) {
        return new ContactInformation(
            this.uuidGenerator.generate(),
            contactInfoParameters.name,
            contactInfoParameters.school,
            contactInfoParameters.contactMethods.map((method) =>
                this.createMethod(method)
            )
        );
    }

    private createMethod(methodParameters: CreateContactMethodParameters) {
        switch (methodParameters.type) {
            case ContactMethodType.Phone:
                return new PhoneContactMethod(
                    this.uuidGenerator.generate(),
                    methodParameters.value
                );
            case ContactMethodType.Email:
            default:
                return new EmailContactMethod(
                    this.uuidGenerator.generate(),
                    methodParameters.value
                );
        }
    }

    async getById(id: string): Promise<Listing> {
        const status = await this.listingBroker.selectById(id);
        return status.value();
    }

    async search(city: string): Promise<Listing[]> {
        const status = await this.listingBroker.selectAllByCity(city);
        return status.value();
    }
}
