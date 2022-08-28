import React, { useState } from 'react';
import { Optional } from '../../../../common/optional';
import { ButtonComponent } from '../../../base/components/button-component';
import { TextInputComponent } from '../../../base/components/text-input-component';
import { ListingSearchResultRenderer } from '../renderers/listing-search-result-renderer';
import { SearchListingComponentProps } from './search-listing-component-props';

export function SearchListingComponent({ model }: SearchListingComponentProps) {
    const renderer = model.render();
    const [city, setCity] = useState(renderer.searchbox.input.value as string);

    function renderSearchResults() {
        if (renderer.listingResults.length === 0) {
            return <p>{renderer.noResultsText}</p>;
        } else {
            return renderListings();
        }
    }

    function renderListings() {
        return (
            <>
                <p>{renderer.resultCountText}</p>
                {renderer.listingResults.map((listingResult, i) =>
                    renderListingResult(listingResult, i)
                )}
            </>
        );
    }

    function renderListingResult(
        listing: ListingSearchResultRenderer,
        i: number
    ) {
        return (
            <div key={i}>
                <p>{listing.city}</p>
                <img src={listing.images[0]} />
                <p>{listing.price}</p>
                <p>{listing.school}</p>
            </div>
        );
    }

    function handleSearch() {
        model.search(city);
    }

    return (
        <>
            <>
                <TextInputComponent
                    value={Optional.of(city)}
                    renderer={renderer.searchbox.input}
                    onChange={setCity}
                />
                <ButtonComponent
                    renderer={renderer.searchbox.button}
                    onClick={Optional.of(handleSearch)}
                />
            </>
            {renderSearchResults()}
        </>
    );
}
