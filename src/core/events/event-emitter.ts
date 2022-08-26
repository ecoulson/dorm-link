import { Event } from './event';
import { EventHandler } from './event-handler';
import { EventType } from './event-type';

export class EventEmitter {
    private readonly eventLookup: Map<EventType, EventHandler[]>;

    constructor() {
        this.eventLookup = new Map();
    }

    on(eventType: EventType, eventHandler: EventHandler): boolean {
        if (!this.eventLookup.has(eventType)) {
            this.eventLookup.set(eventType, [eventHandler]);
        } else {
            this.eventLookup.get(eventType)!.push(eventHandler);
        }
        return true;
    }

    off(eventType: EventType, eventHandler: EventHandler): boolean {
        if (!this.eventLookup.has(eventType)) {
            return false;
        }
        const handlers = this.eventLookup.get(eventType) as EventHandler[];
        const filteredHandlers = handlers.filter(
            (registeredHandler) => registeredHandler !== eventHandler
        );
        this.eventLookup.set(eventType, filteredHandlers);
        return handlers.length !== filteredHandlers.length;
    }

    fire(event: Event): boolean {
        if (this.eventLookup.has(event.type)) {
            this.eventLookup
                .get(event.type)!
                .forEach((handler) => handler.handle(event));
        }
        return true;
    }
}
