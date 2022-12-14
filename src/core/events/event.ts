import { EventType } from './event-type';

export class Event<T = unknown> {
    public readonly type: EventType;
    public readonly data: T;

    constructor(type: EventType, data: T) {
        this.type = type;
        this.data = data;
    }
}
