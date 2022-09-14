import { Event } from '../events/event';
import { EventType } from '../events/event-type';
import { Notification } from './notification';

export class NotificationEvent extends Event<Notification> {
    constructor(data: Notification) {
        super(EventType.Notification, data);
    }
}
