import React from 'react';
import { Optional } from '../../../../common/optional';
import { ButtonComponent } from '../../../base/components/button-component';
import { TextInputComponent } from '../../../base/components/text-input-component';
import { TextInputRenderer } from '../../../base/renderers/text-input-renderer';
import { ContactMethodInputRender } from '../../display-listing/renderers/contact-method-input-renderer';
import { ImageInputRenderer } from '../renderers/image-input-renderer';
import { ContactMethodInputComponent } from './contact-method-input-component';
import { CreateListingComponentProps } from './create-listing-component-props';
import { ImageInputComponent } from './image-input-component';

export function CreateListingComponent({ model }: CreateListingComponentProps) {
    // create a use form hook that updates a form storage. This storage can be accessed by the command handler
    const renderer = model.render();
    return (
        <form name={renderer.form.name} onSubmit={(e) => e.preventDefault()}>
            <div>
                <h2>{renderer.form.sections[0].header.description}</h2>
                <TextInputComponent
                    value={Optional.empty()}
                    renderer={
                        renderer.form.sections[0]
                            .contents[0] as TextInputRenderer
                    }
                    onChange={() => {}}
                />
                <TextInputComponent
                    value={Optional.empty()}
                    renderer={
                        renderer.form.sections[0]
                            .contents[1] as TextInputRenderer
                    }
                    onChange={() => {}}
                />
                <ImageInputComponent
                    renderer={
                        renderer.form.sections[0]
                            .contents[2] as ImageInputRenderer
                    }
                    onChange={() => {}}
                />
            </div>
            <div>
                <h2>{renderer.form.sections[1].header.description}</h2>
                <TextInputComponent
                    value={Optional.empty()}
                    renderer={
                        renderer.form.sections[1]
                            .contents[0] as TextInputRenderer
                    }
                    onChange={() => {}}
                />
                <TextInputComponent
                    value={Optional.empty()}
                    renderer={
                        renderer.form.sections[1]
                            .contents[1] as TextInputRenderer
                    }
                    onChange={() => {}}
                />
                <ContactMethodInputComponent
                    renderer={
                        renderer.form.sections[1]
                            .contents[2] as ContactMethodInputRender
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
