import { Builder } from 'builder-pattern';
import { Injectable } from 'noose-injection';
import { Optional } from '../../common/optional';
import type { ListingController } from '../../core';
import { ButtonRendererFiller } from '../base/fillers/button-renderer-filler';
import { TextInputRendererFiller } from '../base/fillers/text-input-renderer-filler';
import { ListingLibraryAnnotation } from '../core-library-annotation';
import { SubmitFormCommand } from '../forms/submit-form-command';
import { ContactInformationFormSectionRenderer } from './create-listing/renderers/contact-information-form-section-renderer';
import { CreateListingRenderer } from './create-listing/renderers/create-listing-renderer';
import { ListingFormSectionRenderer } from './create-listing/renderers/listing-form-section-renderer';
import { DisplayListingRender } from './display-listing/renderers/display-listing-renderer';

@Injectable()
export class ListingView {
    private readonly buttonFiller: ButtonRendererFiller;
    private readonly textInputFiller: TextInputRendererFiller;

    constructor(
        @ListingLibraryAnnotation.inject()
        private readonly listingController: ListingController
    ) {
        this.buttonFiller = new ButtonRendererFiller();
        this.textInputFiller = new TextInputRendererFiller();
    }

    async buildDisplayListingView(id: string): Promise<DisplayListingRender> {
        const listing = await this.listingController.getById({ id });
        return {
            listing: {
                city: listing.city,
                price: `$${(listing.price / 100).toFixed(2)} / night`,
                images: listing.images,
            },
            contactInformation: {
                name: listing.contactInformation.name,
                school: listing.contactInformation.school,
                contactMethods: listing.contactInformation.contactMethods.map(
                    (method) => {
                        return {
                            label:
                                method.type.substring(0, 1) +
                                method.type.substring(1).toLowerCase(),
                            value: method.value,
                        };
                    }
                ),
            },
        };
    }

    buildCreateListingFormView(): CreateListingRenderer {
        return Builder<CreateListingRenderer>()
            .form({
                name: 'create-listing-form',
                sections: {
                    listing: this.fillListingSection(),
                    contactInformation: this.fillContactInformationSection(),
                },
                submit: this.buttonFiller.fill(
                    'Create Listing',
                    Optional.of(new SubmitFormCommand('create-listing-form'))
                ),
            })
            .build();
    }

    private fillListingSection() {
        return Builder<ListingFormSectionRenderer>()
            .header({
                description: 'Provide information about your listing.',
            })
            .sections({
                city: this.textInputFiller.fill(
                    'city',
                    'City',
                    Optional.of('Los Angeles...')
                ),
                price: this.textInputFiller.fill(
                    'price',
                    'Price ($USD / night)'
                ),
                images: {
                    url: this.textInputFiller.fill('image', 'Image URL'),
                    addImageButton: this.buttonFiller.fill('Add Image'),
                },
            })
            .build();
    }

    private fillContactInformationSection() {
        return Builder<ContactInformationFormSectionRenderer>()
            .header({
                description:
                    'Provide information and methods for people intersted in your property to contact you',
            })
            .sections({
                name: this.textInputFiller.fill('name', 'Name'),
                school: this.textInputFiller.fill(
                    'school',
                    'University / College'
                ),
                contactMethods: {
                    email: this.textInputFiller.fill('email', 'Email'),
                    phoneNumber: this.textInputFiller.fill(
                        'phoneNumber',
                        'Phone Number'
                    ),
                    addEmailButton: this.buttonFiller.fill('Add Email'),
                    addPhoneNumber: this.buttonFiller.fill('Add Phone Number'),
                },
            })
            .build();
    }
}
