import React, { useContext, useEffect } from 'react';
import { Optional } from '../../../../common/optional';
import { ButtonComponent } from '../../../base/components/button-component';
import { TextInputComponent } from '../../../base/components/text-input-component';
import { TextInputRenderer } from '../../../base/renderers/text-input-renderer';
import { CommandContext } from '../../../commands/command-context';
import { useForm } from '../../../forms/use-form';
import { ContactMethodInputRender } from '../../display-listing/renderers/contact-method-input-renderer';
import { CreateListingCommand } from '../create-listing-command';
import { CreateListingFormData } from '../create-listing-form-data';
import { ImageInputRenderer } from '../renderers/image-input-renderer';
import { ContactMethodInputComponent } from './contact-method-input-component';
import { CreateListingComponentProps } from './create-listing-component-props';
import { ImageInputComponent } from './image-input-component';

export function CreateListingComponent({ model }: CreateListingComponentProps) {
    // create a use form hook that updates a form storage. This storage can be accessed by the command handler
    const renderer = model.render();
    const { dispatcher } = useContext(CommandContext);
    const { form, setForm } = useForm<CreateListingFormData>(
        renderer.form.name,
        {
            listing: {
                city: '',
                price: '',
                images: [],
            },
            contactInformation: {
                name: '',
                school: '',
                contactMethods: [],
            },
        }
    );

    function handleSubmit() {
        dispatcher.dispatch(
            new CreateListingCommand({
                ...form,
                listing: {
                    ...form.listing,
                    price: parseFloat(form.listing.price),
                },
            })
        );
    }

    return (
        <form name={renderer.form.name} onSubmit={(e) => e.preventDefault()}>
            <div>
                <h2>{renderer.form.sections[0].header.description}</h2>
                <TextInputComponent
                    value={Optional.of(form.listing.city)}
                    renderer={
                        renderer.form.sections[0]
                            .contents[0] as TextInputRenderer
                    }
                    onChange={(city) => {
                        form.listing.city = city;
                        setForm({ ...form });
                    }}
                />
                <TextInputComponent
                    value={Optional.of(form.listing.price)}
                    renderer={
                        renderer.form.sections[0]
                            .contents[1] as TextInputRenderer
                    }
                    onChange={(price) => {
                        form.listing.price = price;
                        setForm({ ...form });
                    }}
                />
                <ImageInputComponent
                    renderer={
                        renderer.form.sections[0]
                            .contents[2] as ImageInputRenderer
                    }
                    onChange={(images) => {
                        form.listing.images = images;
                        setForm({ ...form });
                    }}
                />
            </div>
            <div>
                <h2>{renderer.form.sections[1].header.description}</h2>
                <TextInputComponent
                    value={Optional.of(form.contactInformation.name)}
                    renderer={
                        renderer.form.sections[1]
                            .contents[0] as TextInputRenderer
                    }
                    onChange={(name) => {
                        form.contactInformation.name = name;
                        setForm({ ...form });
                    }}
                />
                <TextInputComponent
                    value={Optional.of(form.contactInformation.school)}
                    renderer={
                        renderer.form.sections[1]
                            .contents[1] as TextInputRenderer
                    }
                    onChange={(school) => {
                        form.contactInformation.school = school;
                        setForm({ ...form });
                    }}
                />
                <ContactMethodInputComponent
                    renderer={
                        renderer.form.sections[1]
                            .contents[2] as ContactMethodInputRender
                    }
                    onChange={(contactMethods) => {
                        form.contactInformation.contactMethods = contactMethods;
                        setForm({ ...form });
                    }}
                />
            </div>
            <ButtonComponent
                onClick={Optional.of(handleSubmit)}
                renderer={renderer.form.submit}
            />
        </form>
    );
}
