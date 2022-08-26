import { NextApiRequest, NextApiResponse } from 'next';
import { Injectable } from 'noose-injection';
import { RouteHandler } from '../../api/route-handler';
import { ListingControllerAnnotation } from '../../listings/listing-annotations';
import { ListingController } from '../../listings/listing-controller';

@Injectable()
export class ListingRouteHandler implements RouteHandler {
    constructor(
        @ListingControllerAnnotation.inject()
        private readonly listingController: ListingController
    ) {}

    async get(_: NextApiRequest, response: NextApiResponse): Promise<void> {
        response.status(404).send('');
    }

    async post(
        request: NextApiRequest,
        response: NextApiResponse
    ): Promise<void> {
        const listing = await this.listingController.create(request.body);
        response.status(200).json(listing);
    }

    async put(_: NextApiRequest, response: NextApiResponse): Promise<void> {
        response.status(404).send('');
    }

    async delete(_: NextApiRequest, response: NextApiResponse): Promise<void> {
        response.status(404).send('');
    }
}
