import { randomUUID } from 'crypto';
import { ContactInformation } from './contact-information/contact-information';
import { ContactMethodType } from './contact-information/contact-method-type';
import { CreateContactInfoParameters } from './contact-information/create-contact-info-parameters';
import { CreateContactMethodParameters } from './contact-information/create-contact-method-parameters';
import { EmailContactMethod } from './contact-information/email-contact-method';
import { PhoneContactMethod } from './contact-information/phone-contact-method';
import { CreateListingParameters } from './create-listing-parameters';
import { Listing } from './listing';
import { ListingBroker } from './listing-broker';

export class ListingService {
    constructor(private readonly listingBroker: ListingBroker) {}

    async create(
        contactInfoParameters: CreateContactInfoParameters,
        listing: CreateListingParameters
    ): Promise<Listing> {
        const status = await this.listingBroker.insert(
            new Listing(
                randomUUID(),
                this.createContactInfo(contactInfoParameters),
                listing.city,
                listing.images,
                listing.price
            )
        );
        return status.value();
    }

    private createContactInfo(
        contactInfoParameters: CreateContactInfoParameters
    ) {
        return new ContactInformation(
            randomUUID(),
            contactInfoParameters.name,
            contactInfoParameters.school,
            contactInfoParameters.methods.map((method) =>
                this.createMethod(method)
            )
        );
    }

    private createMethod(methodParameters: CreateContactMethodParameters) {
        switch (methodParameters.type) {
            case ContactMethodType.Phone:
                return new PhoneContactMethod(
                    randomUUID(),
                    methodParameters.value
                );
            case ContactMethodType.Email:
            default:
                return new EmailContactMethod(
                    randomUUID(),
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
