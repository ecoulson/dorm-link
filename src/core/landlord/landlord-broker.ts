import { Prisma } from '@prisma/client';
import { Injectable } from 'noose-injection';
import { LandlordClientAnnotation } from '../core-annotations';
import { Landlord } from './models/landlord';

@Injectable()
export class LandlordBroker {
    constructor(
        @LandlordClientAnnotation.inject()
        private readonly client: Prisma.LandlordDelegate<unknown>
    ) {}

    async insert(landlord: Landlord): Promise<Landlord> {
        return this.client.create({
            data: {
                email: landlord.email,
                firstName: landlord.firstName,
                lastName: landlord.lastName,
            },
        });
    }
}
