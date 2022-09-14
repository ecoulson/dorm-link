import { Listing } from '../models/listing';

export type ListingUpdate = Partial<Listing> & { id: string };
