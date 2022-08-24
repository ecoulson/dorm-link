import { NextApiRequest, NextApiResponse } from 'next';
import { CoreLibrary } from '../../core';

export default async function listingHandler(
    request: NextApiRequest,
    response: NextApiResponse
) {
    response.status(200).json(await CoreLibrary.listing.create(request.body));
}
