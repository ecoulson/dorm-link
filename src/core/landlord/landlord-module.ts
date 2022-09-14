import { Module } from 'noose-injection';
import { LandlordControllerAnnotation } from './landlord-annotations';
import { LandlordController } from './landlord-controller';

export class LandlordModule extends Module {
    configure(): void {
        this.registerClass(LandlordControllerAnnotation, LandlordController);
    }
}
