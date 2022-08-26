import { EventEmitter } from '../../../core';
import { CommandHandler } from '../../commands/command-handler';
import { HTTPMethod } from '../../network/http-method';
import { NetworkManager } from '../../network/network-manager';
import { CreateListingCommand } from './create-listing-command';
import { ListingCreatedEvent } from './listing-created-event';

export class CreateListingCommandHandler implements CommandHandler {
    constructor(
        private readonly eventEmitter: EventEmitter,
        private readonly networkManager: NetworkManager
    ) {}

    async handle({ listingRequest }: CreateListingCommand): Promise<void> {
        const response = await this.networkManager.makeRequest({
            path: 'api/listing',
            headers: {},
            method: HTTPMethod.POST,
            body: listingRequest,
        });
        this.eventEmitter.fire(
            new ListingCreatedEvent(response.data.redirectCommand)
        );
    }
}
