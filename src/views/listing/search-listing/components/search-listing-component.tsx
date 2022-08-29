import React from 'react';
import { TextComponent } from '../../../base/components/text-component';
import { ListingSearchResultRenderer } from '../renderers/listing-search-result-renderer';
import { CitySearchBoxComponent } from './city-search-box-component';
import { SearchListingComponentProps } from './search-listing-component-props';

export function SearchListingComponent({ model }: SearchListingComponentProps) {
    const renderer = model.render();

    function renderSearchResults() {
        if (renderer.listingResults.length === 0) {
            return <TextComponent>{renderer.noResultsText}</TextComponent>;
        } else {
            return renderListings();
        }
    }

    function renderListings() {
        return (
            <>
                <TextComponent>{renderer.resultCountText}</TextComponent>
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
                <TextComponent>{listing.city}</TextComponent>
                <img src={listing.images[0]} />
                <TextComponent>{listing.price}</TextComponent>
                <TextComponent>{listing.school}</TextComponent>
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
