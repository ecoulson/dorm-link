export interface ListingViewModel {
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
