import React from 'react';
import { HeadingComponent } from '../../../base/components/heading-component';
import { HeadingSize } from '../../../base/components/heading-size';
import { TextComponent } from '../../../base/components/text-component';
import { ListingComponentProps } from './listing-component-props';

export function ListingComponent(props: ListingComponentProps) {
    const renderer = props.model.render();
    return (
        <div>
            <HeadingComponent size={HeadingSize.Title}>
                {renderer.listing.city}
            </HeadingComponent>
            <HeadingComponent size={HeadingSize.Subtitle}>
                {renderer.listing.price}
            </HeadingComponent>
            {renderer.listing.images.map((image) => (
                <img key={image} src={image} />
            ))}
            <TextComponent>{renderer.contactInformation.name}</TextComponent>
            <TextComponent>{renderer.contactInformation.school}</TextComponent>
            {renderer.contactInformation.contactMethods.map((method) => (
                <div key={method.value}>
                    <span>{method.label}: </span>
                    <span>{method.value}</span>
                </div>
            ))}
        </div>
    );
}
