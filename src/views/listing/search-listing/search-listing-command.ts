import { RedirectCommand } from '../../../core';

export class SearchListingCommand extends RedirectCommand {
    constructor(city: string) {
        super(`/listing/search?city=${encodeURI(city)}`);
    }
}
