import { Event } from '../events/event';
import { EventType } from '../events/event-type';
import { Notification } from './notification';

export class NotificationEvent implements Event<Notification> {
    public readonly type: EventType;

    constructor(public readonly data: Notification) {
        this.type = EventType.Notification;
    }
}
