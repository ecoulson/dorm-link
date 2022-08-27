import React from 'react';
import { ListingComponentProps } from './listing-component-props';

export function ListingComponent(props: ListingComponentProps) {
    const renderer = props.model.render();
    return (
        <div>
            <h1>{renderer.listing.city}</h1>
            <h2>{renderer.listing.price}</h2>
            {renderer.listing.images.map((image) => (
                <img key={image} src={image} />
            ))}
            <h3>{renderer.contactInformation.name}</h3>
            <h4>{renderer.contactInformation.school}</h4>
            {renderer.contactInformation.contactMethods.map((method) => (
                <div key={method.value}>
                    <span>{method.label}: </span>
                    <span>{method.value}</span>
                </div>
            ))}
        </div>
    );
}
