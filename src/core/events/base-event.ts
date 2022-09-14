import { Event } from './event';
import { EventType } from './event-type';

export class BaseEvent<T> implements Event<T> {
    public readonly type: EventType;
    public readonly data: T;

    constructor(type: EventType, data: T) {
        this.type = type;
        this.data = data;
    }
}
