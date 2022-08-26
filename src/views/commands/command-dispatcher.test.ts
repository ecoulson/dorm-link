import { anything, capture, instance, mock, reset, verify } from 'ts-mockito';
import { CommandType, EventEmitter, EventType } from '../../core';
import { CommandDispatcher } from './command-dispatcher';

describe('Command Dispatcher', () => {
    const mockedEventEmitter = mock(EventEmitter);
    const commandDispatcher = new CommandDispatcher(
        instance(mockedEventEmitter)
    );

    beforeEach(() => {
        reset(mockedEventEmitter);
    });

    test('Should emit a command as an event', () => {
        const result = commandDispatcher.dispatch({
            type: CommandType.CreateListing,
        });

        expect(result).toBeTruthy();
        verify(mockedEventEmitter.fire(anything())).once();
        const [event] = capture(mockedEventEmitter.fire).last();
        expect(event).toEqual({
            type: EventType.Command,
            data: {
                type: CommandType.CreateListing,
            },
        });
    });
});
