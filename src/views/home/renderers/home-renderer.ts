import { ButtonRenderer } from '../../base/renderers/button-renderer';
import { SearchBoxRenderer } from '../../listing/search-listing/renderers/search-box-renderer';

export interface HomeRenderer {
    header: {
        title: string;
    };
    main: {
        aboutSection: {
            text: string;
        };
        browseListingsSection: {
            description: string;
            searchbox: SearchBoxRenderer;
        };
        createListingSection: {
            description: string;
            button: ButtonRenderer;
        };
    };
    footer: {
        contactUs: {
            text: string;
            email: string;
            emailLink: string;
        };
    };
}
