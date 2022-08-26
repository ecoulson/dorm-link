import 'reflect-metadata';
import { createNextRouter } from './api/create-next-router';
import { CoreModule } from './core-module';
import { ListingRouteHandler } from './listings/api/listing-route-handler';
import {
    ListingControllerAnnotation,
    ListingRouteHandlerAnnotation,
} from './listings/listing-annotations';
import { ListingController } from './listings/listing-controller';

const coreModule = new CoreModule();
coreModule.configure();

export const Controllers = {
    listing: coreModule.resolve<ListingController>(ListingControllerAnnotation),
};

export const Routes = {
    listing: coreModule.resolve<ListingRouteHandler>(
        ListingRouteHandlerAnnotation
    ),
    new: createNextRouter,
};
