import { Status } from '../../common/status';
import { Listing } from './listing';

export class ListingBroker {
    create(listing: Listing): Promise<Status<Listing>> {
        throw new Error();
    }

    selectById(id: string): Promise<Status<Listing>> {
        throw new Error();
    }

    selectAllByCity(city: string): Promise<Status<Listing[]>> {
        throw new Error();
    }
}
