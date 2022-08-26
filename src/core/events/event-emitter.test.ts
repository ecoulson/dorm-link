import { EventEmitter } from './event-emitter';
import { EventType } from './event-type';

describe('Event Emitter Test Suite', () => {
    test('Should not call handler when event is fired', () => {
        const eventEmitter = new EventEmitter();

        const handler = jest.fn();

        const result = eventEmitter.fire({
            type: EventType.ListingCreated,
            data: {},
        });

        expect(handler).toBeCalledTimes(0);
        expect(result).toBeTruthy();
    });

    test('Should call handler when event is fired', () => {
        const eventEmitter = new EventEmitter();
        const handler = jest.fn();
        eventEmitter.on(EventType.Command, {
            handle: handler,
        });
        eventEmitter.on(EventType.Command, {
            handle: handler,
        });

        const result = eventEmitter.fire({
            type: EventType.Command,
            data: {},
        });

        expect(handler).toBeCalledTimes(2);
        expect(result).toBeTruthy();
    });

    test('Should call correct handler when event is fired', () => {
        const eventEmitter = new EventEmitter();
        const handler = jest.fn();
        eventEmitter.on(EventType.ListingCreated, {
            handle: handler,
        });
        eventEmitter.on(EventType.Command, {
            handle: handler,
        });

        const result = eventEmitter.fire({
            type: EventType.ListingCreated,
            data: {},
        });

        expect(handler).toBeCalledTimes(1);
        expect(result).toBeTruthy();
    });

    test('Should remove a listener after being added', () => {
        const eventEmitter = new EventEmitter();
        const handler = {
            handle: jest.fn(),
        };
        eventEmitter.on(EventType.ListingCreated, handler);

        const result = eventEmitter.off(EventType.ListingCreated, handler);
        eventEmitter.fire({
            type: EventType.ListingCreated,
            data: {},
        });

        expect(handler.handle).toBeCalledTimes(0);
        expect(result).toBeTruthy();
    });

    test('Should fail to remove a listener since they are not the same', () => {
        const eventEmitter = new EventEmitter();
        const handler = {
            handle: jest.fn(),
        };
        eventEmitter.on(EventType.ListingCreated, {
            handle: jest.fn(),
        });

        const result = eventEmitter.off(EventType.ListingCreated, handler);

        expect(result).toBeFalsy();
    });

    test('Should fail to remove a listener since there are not registered listeners', () => {
        const eventEmitter = new EventEmitter();
        const handler = {
            handle: jest.fn(),
        };

        const result = eventEmitter.off(EventType.ListingCreated, handler);

        expect(result).toBeFalsy();
    });
});
