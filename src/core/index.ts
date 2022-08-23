import 'reflect-metadata';
import { CoreModule } from './core-module';
import { ListingControllerAnnotation } from './listings/listing-annotations';
import { ListingController } from './listings/listing-controller';

const coreModule = new CoreModule();
coreModule.configure();

export const CoreLibrary = {
    listing: coreModule.resolve<ListingController>(ListingControllerAnnotation),
};
