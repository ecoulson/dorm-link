import { NextApiRequest, NextApiResponse } from 'next';

export interface ActionHandler {
    handle(request: NextApiRequest, response: NextApiResponse): Promise<void>;
}
