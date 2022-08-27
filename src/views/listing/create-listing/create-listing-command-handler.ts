import { RedirectCommand } from '../../../core';
import { CommandDispatcher } from '../../commands/command-dispatcher';
import { CommandHandler } from '../../commands/command-handler';
import { HTTPMethod } from '../../network/http-method';
import { NetworkManager } from '../../network/network-manager';
import { CreateListingCommand } from './create-listing-command';

export class CreateListingCommandHandler implements CommandHandler {
    constructor(
        private readonly commandDispatcher: CommandDispatcher,
        private readonly networkManager: NetworkManager
    ) {}

    async handle({ listingRequest }: CreateListingCommand): Promise<void> {
        const response = await this.networkManager.makeRequest({
            path: 'api/listing',
            headers: {},
            method: HTTPMethod.POST,
            body: listingRequest,
        });
        this.commandDispatcher.dispatch(response.data as RedirectCommand);
    }
}
