import { ListingSearchResultRenderer } from './listing-search-result-renderer';
import { SearchBoxRenderer } from './search-box-renderer';

export interface SearchListingRenderer {
    searchbox: SearchBoxRenderer;
    listingResults: ListingSearchResultRenderer[];
    noResultsText: string;
    resultCountText: string;
}
