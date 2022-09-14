import { Module } from 'noose-injection';
import {
    LandlordControllerAnnotation,
    LandlordServiceAnnotation,
} from './landlord-annotations';
import { LandlordController } from './landlord-controller';
import { LandlordService } from './landlord-service';

export class LandlordModule extends Module {
    configure(): void {
        this.registerClass(LandlordControllerAnnotation, LandlordController);
        this.registerClass(LandlordServiceAnnotation, LandlordService);
    }
}
