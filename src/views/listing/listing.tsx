import React from 'react';
import { ListingViewModel } from './listing-view-model';

interface ListingProps {
    model: ListingViewModel;
}

export function Listing({ model }: ListingProps) {
    return (
        <div>
            <h1>{model.listing.city}</h1>
            <h2>{model.listing.price}</h2>
            {model.listing.images.map((image) => (
                <img key={image} src={image} />
            ))}
            <h3>{model.contactInfo.name}</h3>
            <h4>{model.contactInfo.school}</h4>
            {model.contactInfo.contactMethods.map((method) => (
                <div key={method.value}>
                    <span>{method.label}:</span>
                    <span>{method.value}</span>
                </div>
            ))}
        </div>
    );
}
