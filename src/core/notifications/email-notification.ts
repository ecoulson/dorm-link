import { Notification } from './notification';
import { NotificationType } from './notification-type';

export class EmailNotification implements Notification {
    public readonly type: NotificationType;

    constructor(
        public readonly address: string,
        public readonly content: string
    ) {
        this.type = NotificationType.Email;
    }
}
