import { Injectable } from 'noose-injection';

@Injectable()
export class Environment {
    get(key: string): string {
        return process.env[key] as string;
    }
}
