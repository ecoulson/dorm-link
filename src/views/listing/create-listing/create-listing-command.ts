import { Command, CommandType, CreateListingRequest } from '../../../core';

export class CreateListingCommand implements Command {
    public readonly type: CommandType;

    constructor(public readonly listingRequest: CreateListingRequest) {
        this.type = CommandType.CreateListing;
    }
}
