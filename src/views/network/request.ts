import { HTTPMethod } from './http-method';

export interface Request {
    method: HTTPMethod;
    path: string;
    headers: Record<string, string>;
    body: any;
}
