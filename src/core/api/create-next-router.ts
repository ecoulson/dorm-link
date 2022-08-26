import { NextApiHandler } from 'next';
import { APIRouter } from './api-router';
import { RouteHandler } from './route-handler';

export function createNextRouter(routeHandler: RouteHandler): NextApiHandler {
    return (request, response) => {
        const router = new APIRouter(routeHandler);
        router.route(request, response);
    };
}
