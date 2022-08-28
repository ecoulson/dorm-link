import React from 'react';
import { ListingSearchResultRenderer } from '../renderers/listing-search-result-renderer';
import { CitySearchBoxComponent } from './city-search-box-component';
import { SearchListingComponentProps } from './search-listing-component-props';

export function SearchListingComponent({ model }: SearchListingComponentProps) {
    const renderer = model.render();

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

    function handleSearch(city: string) {
        model.search(city);
    }

    return (
        <>
            <CitySearchBoxComponent
                handleSearch={handleSearch}
                renderer={renderer.searchbox}
            />
            {renderSearchResults()}
        </>
    );
}
