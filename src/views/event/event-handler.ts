import { Event } from './event';

export interface EventHandler<T = any> {
    handle(event: Event<T>): void;
}
