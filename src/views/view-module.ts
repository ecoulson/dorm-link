import { Module } from 'noose-injection';
import { CoreLibraryModule } from './core-library/core-library-module';
import { HomeViewModule } from './home/home-view-module';
import { ListingViewModule } from './listing/listing-view-module';

export class ViewModule extends Module {
    configure(): void {
        this.registerModule(new CoreLibraryModule());
        this.registerModule(new ListingViewModule());
        this.registerModule(new HomeViewModule());
    }
}
