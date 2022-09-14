import { PrismaClient } from '@prisma/client';
import { Module } from 'noose-injection';
import { ListingClientAnnotation } from './core-annotations';
import { IdentifierModule } from './identifiers/identifier-module';
import { LandlordModule } from './landlord/landlord-module';
import { ListingModule } from './listings/listing-module';

export class CoreModule extends Module {
    configure(): void {
        const prismaClient = new PrismaClient();
        this.registerValue(ListingClientAnnotation, prismaClient.listing);
        this.registerModule(new ListingModule());
        this.registerModule(new LandlordModule());
        this.registerModule(new IdentifierModule());
    }
}
