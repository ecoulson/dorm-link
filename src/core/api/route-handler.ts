import { NextApiRequest, NextApiResponse } from 'next';

export interface RouteHandler {
    get(request: NextApiRequest, response: NextApiResponse): Promise<void>;
    post(request: NextApiRequest, response: NextApiResponse): Promise<void>;
    put(request: NextApiRequest, response: NextApiResponse): Promise<void>;
    delete(request: NextApiRequest, response: NextApiResponse): Promise<void>;
}
