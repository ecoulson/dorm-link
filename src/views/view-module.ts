import { Module } from 'noose-injection';
import { CoreLibrary } from '../core';
import {
    CoreLibraryAnnotaiton,
    ListingLibraryAnnotation,
} from './core-library-annotation';
import { ListingViewModule } from './listing/listing-view-module';

export class ViewModule extends Module {
    configure(): void {
        this.registerValue(CoreLibraryAnnotaiton, CoreLibrary);
        this.registerValue(ListingLibraryAnnotation, CoreLibrary.listing);
        this.registerModule(new ListingViewModule());
    }
}
