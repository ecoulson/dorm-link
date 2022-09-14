import { Module } from 'noose-injection';
import { ListingRouteHandler } from './api/listing-route-handler';
import {
    ListingBrokerAnnotation,
    ListingControllerAnnotation,
    ListingRouteHandlerAnnotation,
    ListingServiceAnnotation,
} from './listing-annotations';
import { ListingBroker } from './brokers/listing-broker';
import { ListingController } from './controllers/listing-controller';
import { ListingService } from './services/listing-service';

export class ListingModule extends Module {
    configure(): void {
        this.registerClass(ListingBrokerAnnotation, ListingBroker);
        this.registerClass(ListingServiceAnnotation, ListingService);
        this.registerClass(ListingControllerAnnotation, ListingController);
        this.registerClass(ListingRouteHandlerAnnotation, ListingRouteHandler);
    }
}
