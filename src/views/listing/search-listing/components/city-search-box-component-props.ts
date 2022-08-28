import { SearchBoxRenderer } from '../renderers/search-box-renderer';

export interface CitySearchBoxComponentProps {
    renderer: SearchBoxRenderer;
    handleSearch: (city: string) => void;
}
