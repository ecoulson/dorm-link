import 'reflect-metadata';
import { ListingView } from './listing/display-listing/listing-view';
import { ListingViewAnnotation } from './listing/listing-view-annotation';
import { ViewModule } from './view-module';

const viewModuleInstance = new ViewModule();
viewModuleInstance.configure();

export const Views = {
    listing: viewModuleInstance.resolve<ListingView>(ListingViewAnnotation),
};
