import { Module } from 'noose-injection';
import { ListingView } from './display-listing/listing-view';
import { ListingViewAnnotation } from './listing-view-annotation';

export class ListingViewModule extends Module {
    configure(): void {
        this.registerClass(ListingViewAnnotation, ListingView);
    }
}
