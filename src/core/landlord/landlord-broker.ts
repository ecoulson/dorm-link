import { Injectable } from 'noose-injection';
import { Landlord } from './landlord';

@Injectable()
export class LandlordBroker {
    async insert(landlord: Landlord): Promise<Landlord> {
        throw new Error();
    }
}
