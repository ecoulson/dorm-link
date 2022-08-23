import { Status } from '../../common/status';
import { Listing } from './listing';
import {
    ContactMethodType,
    Prisma,
    Listing as ListingModel,
    ContactInformation as ContactInformationModel,
    ContactMethod as ContactMethodModel,
} from '@prisma/client';
import { ContactInformation } from './contact-information/contact-information';
import { EmailContactMethod } from './contact-information/email-contact-method';
import { PhoneContactMethod } from './contact-information/phone-contact-method';

export class ListingBroker {
    constructor(private readonly client: Prisma.ListingDelegate<unknown>) {}

    async insert(listing: Listing): Promise<Status<Listing>> {
        const result = await this.client.create({
            data: {
                id: listing.id,
                price: listing.price,
                city: listing.city,
                images: listing.images,
                contactInformation: {
                    create: {
                        id: listing.contactInformation.id,
                        name: listing.contactInformation.name,
                        school: listing.contactInformation.school,
                        contactMethods: {
                            create: listing.contactInformation.contactMethods.map(
                                (method) => {
                                    return {
                                        id: method.id,
                                        type: method.type as ContactMethodType,
                                        value: method.value,
                                    };
                                }
                            ),
                        },
                    },
                },
            },
            include: {
                contactInformation: {
                    include: {
                        contactMethods: true,
                    },
                },
            },
        });
        return Status.ok(this.createListingFromQueryResult(result));
    }

    private createListingFromQueryResult(
        result: ListingModel & {
            contactInformation:
                | (ContactInformationModel & {
                      contactMethods: ContactMethodModel[];
                  })
                | null;
        }
    ): Listing {
        return new Listing(
            result.id,
            new ContactInformation(
                result.contactInformation!.id,
                result.contactInformation!.name,
                result.contactInformation!.school,
                result.contactInformation!.contactMethods.map((method) => {
                    switch (method.type) {
                        case ContactMethodType.PHONE:
                            return new PhoneContactMethod(
                                method.id,
                                method.value
                            );
                        case ContactMethodType.EMAIL:
                        default:
                            return new EmailContactMethod(
                                method.id,
                                method.value
                            );
                    }
                })
            ),
            result.city,
            result.images,
            result.price
        );
    }

    async selectById(id: string): Promise<Status<Listing>> {
        const result = await this.client.findFirst({
            where: {
                id,
            },
            include: {
                contactInformation: {
                    include: {
                        contactMethods: true,
                    },
                },
            },
        });
        return Status.ok(this.createListingFromQueryResult(result!));
    }

    async selectAllByCity(city: string): Promise<Status<Listing[]>> {
        const result = await this.client.findMany({
            where: {
                city,
            },
            include: {
                contactInformation: {
                    include: {
                        contactMethods: true,
                    },
                },
            },
        });
        return Status.ok(
            result.map((schema) => this.createListingFromQueryResult(schema))
        );
    }
}
