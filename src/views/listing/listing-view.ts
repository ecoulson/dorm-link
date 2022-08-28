import { Builder } from 'builder-pattern';
import { Injectable } from 'noose-injection';
import { Optional } from '../../common/optional';
import type { ListingController } from '../../core';
import { ButtonRendererFiller } from '../base/fillers/button-renderer-filler';
import { TextInputRendererFiller } from '../base/fillers/text-input-renderer-filler';
import { InputType } from '../base/input-type';
import { ListingLibraryAnnotation } from '../core-library-annotation';
import { FormSectionRenderer } from '../forms/renderer/form-section-renderer';
import { SubmitFormCommand } from '../forms/submit-form-command';
import { CreateListingRenderer } from './create-listing/renderers/create-listing-renderer';
import { ImageInputRenderer } from './create-listing/renderers/image-input-renderer';
import { ContactMethodInputRender } from './display-listing/renderers/contact-method-input-renderer';
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
                sections: this.fillSections(),
                submit: this.buttonFiller.fill(
                    'Create Listing',
                    Optional.empty()
                ),
            })
            .build();
    }

    private fillSections() {
        return [
            this.fillListingSection(),
            this.fillContactInformationSection(),
        ];
    }

    private fillListingSection() {
        return Builder<FormSectionRenderer>()
            .header({
                description: 'Provide information about your listing.',
            })
            .contents([
                this.textInputFiller.fill(
                    'city',
                    'City',
                    Optional.of('Los Angeles...')
                ),
                this.textInputFiller.fill('price', 'Price ($USD / night)'),
                {
                    url: this.textInputFiller.fill('image', 'Image URL'),
                    type: InputType.IMAGE_URL,
                    addImageButton: this.buttonFiller.fill('Add Image'),
                } as ImageInputRenderer,
            ])
            .build();
    }

    private fillContactInformationSection() {
        return Builder<FormSectionRenderer>()
            .header({
                description:
                    'Provide information and methods for people intersted in your property to contact you.',
            })
            .contents([
                this.textInputFiller.fill('name', 'Name'),
                this.textInputFiller.fill('school', 'University / College'),
                {
                    type: InputType.CONTACT_METHOD,
                    email: this.textInputFiller.fill('email', 'Email'),
                    phoneNumber: this.textInputFiller.fill(
                        'phoneNumber',
                        'Phone Number'
                    ),
                    addEmailButton: this.buttonFiller.fill('Add Email'),
                    addPhoneNumber: this.buttonFiller.fill('Add Phone Number'),
                } as ContactMethodInputRender,
            ])
            .build();
    }
}
