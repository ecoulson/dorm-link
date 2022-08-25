import { EventType } from './event-type';

export interface Event<T = any> {
    type: EventType;
    data: T;
}
