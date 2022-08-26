import { NextApiRequest, NextApiResponse } from 'next';
import { RouteHandler } from './route-handler';

export class APIRouter {
    constructor(private readonly routeHandler: RouteHandler) {}

    async route(
        request: NextApiRequest,
        response: NextApiResponse
    ): Promise<void> {
        switch (request.method?.toUpperCase()) {
            case 'GET':
                return this.routeHandler.get(request, response);
            case 'POST':
                return this.routeHandler.post(request, response);
            case 'PUT':
                return this.routeHandler.put(request, response);
            case 'DELETE':
                return this.routeHandler.delete(request, response);
            default:
                response.status(404).send('');
                return;
        }
    }
}
