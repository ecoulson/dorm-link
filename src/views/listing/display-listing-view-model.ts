export interface DisplayListingViewModel {
    listing: {
        city: string;
        price: string;
        images: string[];
    };
    contactInfo: {
        name: string;
        school: string;
        contactMethods: {
            label: string;
            value: string;
        }[];
    };
}
