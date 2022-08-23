import { ListingViewModel } from './display-listing-view-model';

interface ListingProps {
    model: ListingViewModel;
}

export function Listing({ model }: ListingProps) {
    console.log(model);
    return <div>Listing</div>;
}
