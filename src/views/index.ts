import 'reflect-metadata';
import { HomeView } from './home/home-view';
import { HomeViewAnnotation } from './home/home-view-annotations';
import { ListingView } from './listing/listing-view';
import { ListingViewAnnotation } from './listing/listing-view-annotation';
import { ViewModule } from './view-module';

const viewModuleInstance = new ViewModule();
viewModuleInstance.configure();

export const Views = {
    listing: viewModuleInstance.resolve<ListingView>(ListingViewAnnotation),
    home: viewModuleInstance.resolve<HomeView>(HomeViewAnnotation),
};
