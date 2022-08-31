import { RedirectCommand } from '../../../core';

export class ViewListingCommand extends RedirectCommand {
    constructor(id: string) {
        super(`/listing/${id}`);
    }
}
