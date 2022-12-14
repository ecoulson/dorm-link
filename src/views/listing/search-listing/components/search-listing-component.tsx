import React from 'react';
import { TextComponent } from '../../../base/components/text-component';
import { ListingSearchResultRenderer } from '../renderers/listing-search-result-renderer';
import { CitySearchBoxComponent } from './city-search-box-component';
import { SearchListingComponentProps } from './search-listing-component-props';
import styles from '../../../../styles/listings/search-listing/search-listing.module.css';

export function SearchListingComponent({ model }: SearchListingComponentProps) {
    const renderer = model.render();

    function renderSearchResults() {
        if (renderer.listingResults.length === 0) {
            return (
                <div className={styles.noResultsContainer}>
                    <TextComponent>{renderer.noResultsText}</TextComponent>
                </div>
            );
        } else {
            return renderListings();
        }
    }

    function renderListings() {
        return (
            <div className={styles.resultsContainer}>
                <TextComponent>{renderer.resultCountText}</TextComponent>
                {renderer.listingResults.map((listingResult) =>
                    renderListingResult(listingResult)
                )}
            </div>
        );
    }

    function renderListingResult(listing: ListingSearchResultRenderer) {
        return (
            <div
                onClick={() => model.viewListingSearchResult(listing)}
                key={listing.id}
                className={styles.searchResult}
            >
                <div>
                    <img
                        className={styles.resultImage}
                        src={listing.images[0]}
                    />
                </div>
                <div className={styles.searchResultInformationContainer}>
                    <TextComponent>{listing.city}</TextComponent>
                    <TextComponent>{listing.price}</TextComponent>
                    <TextComponent>{listing.school}</TextComponent>
                </div>
            </div>
        );
    }

    function handleSearch(city: string) {
        model.search(city);
    }

    return (
        <div className={styles.container}>
            <CitySearchBoxComponent
                handleSearch={handleSearch}
                renderer={renderer.searchbox}
            />
            <div className={styles.searchResultsContainer}>
                {renderSearchResults()}
            </div>
        </div>
    );
}
