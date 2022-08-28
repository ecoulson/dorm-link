import { Module } from 'noose-injection';
import { Controllers } from '../../core/library';
import {
    CoreLibraryAnnotaiton,
    ListingLibraryAnnotation,
} from './core-library-annotation';

export class CoreLibraryModule extends Module {
    configure(): void {
        this.registerValue(CoreLibraryAnnotaiton, Controllers);
        this.registerValue(ListingLibraryAnnotation, Controllers.listing);
    }
}
