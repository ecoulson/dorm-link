import { anything, instance, mock, reset, verify } from 'ts-mockito';
import { EventEmitter } from '../event/event-emitter';
import { EventType } from '../event/event-type';
import { CommandResolver } from './command-resolver';
import { CommandType } from './command-type';

describe('Command Resolver Test Suite', () => {
    const mockedEventEmitter = mock(EventEmitter);
    const resolver = new CommandResolver(instance(mockedEventEmitter));

    beforeEach(() => {
        reset(mockedEventEmitter);
    });

    test('Should set up the command resolver', () => {
        resolver.setup();

        verify(mockedEventEmitter.on(EventType.Command, anything())).once();
    });
});
