import React from 'react';
import { Optional } from '../../../../common/optional';
import { ButtonComponent } from '../../../base/components/button-component';
import { HeadingComponent } from '../../../base/components/heading-component';
import { HeadingSize } from '../../../base/components/heading-size';
import { TextInputComponent } from '../../../base/components/text-input-component';
import { TextInputRenderer } from '../../../base/renderers/text-input-renderer';
import { useForm } from '../../../forms/use-form';
import { ContactMethodInputRender } from '../../display-listing/renderers/contact-method-input-renderer';
import { CreateListingFormData } from '../create-listing-form-data';
import { ImageInputRenderer } from '../renderers/image-input-renderer';
import { ContactMethodInputComponent } from './contact-method-input-component';
import { CreateListingComponentProps } from './create-listing-component-props';
import { ImageInputComponent } from './image-input-component';
import styles from '../../../../styles/listings/create-listing/create-listing.module.css';

export function CreateListingComponent({ model }: CreateListingComponentProps) {
    // create a use form hook that updates a form storage. This storage can be accessed by the command handler
    const renderer = model.render();
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
        model.createListing(form);
    }

    return (
        <form
            className={styles.form}
            name={renderer.form.name}
            onSubmit={(e) => e.preventDefault()}
        >
            <div className={styles.formSection}>
                <HeadingComponent size={HeadingSize.Subtitle}>
                    {renderer.form.sections[0].header.description}
                </HeadingComponent>
                <div className={styles.formInputSection}>
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
            </div>
            <div className={styles.formSection}>
                <HeadingComponent size={HeadingSize.Subtitle}>
                    {renderer.form.sections[1].header.description}
                </HeadingComponent>
                <div className={styles.formInputSection}>
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
                            form.contactInformation.contactMethods =
                                contactMethods;
                            setForm({ ...form });
                        }}
                    />
                </div>
            </div>
            <div className={styles.formSubmit}>
                <ButtonComponent
                    onClick={Optional.of(handleSubmit)}
                    renderer={renderer.form.submit}
                />
            </div>
        </form>
    );
}
