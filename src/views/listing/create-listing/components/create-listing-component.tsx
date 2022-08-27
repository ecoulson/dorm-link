import React from 'react';
import { Optional } from '../../../../common/optional';
import { ButtonComponent } from '../../../base/components/button-component';
import { TextInputComponent } from '../../../base/components/text-input-component';
import { CreateListingComponentProps } from './create-listing-component-props';
import { ImageInputComponent } from './image-input-component';

export function CreateListingComponent({ model }: CreateListingComponentProps) {
    // create a use form hook that updates a form storage. This storage can be accessed by the command handler
    const renderer = model.render();
    return (
        <form name={renderer.form.name} onSubmit={(e) => e.preventDefault()}>
            <div>
                <h2>{renderer.form.sections.listing.header.description}</h2>
                <TextInputComponent
                    value={Optional.empty()}
                    renderer={renderer.form.sections.listing.sections.city}
                    onChange={() => {}}
                />
                <TextInputComponent
                    value={Optional.empty()}
                    renderer={renderer.form.sections.listing.sections.price}
                    onChange={() => {}}
                />
                <ImageInputComponent
                    renderer={renderer.form.sections.listing.sections.images}
                    onChange={() => {}}
                />
            </div>
            <div>
                <h2>
                    {
                        renderer.form.sections.contactInformation.header
                            .description
                    }
                </h2>
                <TextInputComponent
                    value={Optional.empty()}
                    renderer={
                        renderer.form.sections.contactInformation.sections.name
                    }
                    onChange={() => {}}
                />
                <TextInputComponent
                    value={Optional.empty()}
                    renderer={
                        renderer.form.sections.contactInformation.sections
                            .school
                    }
                    onChange={() => {}}
                />
            </div>
            <ButtonComponent
                onClick={Optional.empty()}
                renderer={renderer.form.submit}
            />
        </form>
    );
}
