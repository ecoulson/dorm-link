import { DeepPartial } from '../../../common/deep-partial';
import { Listing } from '../models/listing';

export type ListingUpdate = DeepPartial<Listing> & { id: string };
