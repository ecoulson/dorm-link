import { Module } from 'noose-injection';
import { Controllers } from '../core/library';
import {
    CoreLibraryAnnotaiton,
    ListingLibraryAnnotation,
} from './core-library-annotation';
import { ListingViewModule } from './listing/listing-view-module';

export class ViewModule extends Module {
    configure(): void {
        this.registerValue(CoreLibraryAnnotaiton, Controllers);
        this.registerValue(ListingLibraryAnnotation, Controllers.listing);
        this.registerModule(new ListingViewModule());
    }
}
