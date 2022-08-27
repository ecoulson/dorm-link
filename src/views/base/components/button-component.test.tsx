import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { CommandType, EventEmitter } from '../../../core';
import { ButtonComponent } from './button-component';
import { anything, instance, mock, reset, verify } from 'ts-mockito';
import { CommandDispatcher } from '../../commands/command-dispatcher';
import { Optional } from '../../../common/optional';
import { CommandContext } from '../../commands/command-context';

describe('Button Component Test Suite', () => {
    const mockedDispatcher = mock(CommandDispatcher);

    beforeEach(() => {
        reset(mockedDispatcher);
    });

    test('Should render a button component that dispatches a command', () => {
        render(
            <CommandContext.Provider
                value={{
                    eventEmitter: instance(mock(EventEmitter)),
                    dispatcher: instance(mockedDispatcher),
                }}
            >
                <ButtonComponent
                    onClick={Optional.empty()}
                    renderer={{
                        text: 'Button',
                        command: { type: CommandType.CreateListing },
                    }}
                />
            </CommandContext.Provider>
        );

        fireEvent.click(screen.getByText('Button'));

        expect(screen.queryByText('Button')).toBeTruthy();
        verify(mockedDispatcher.dispatch(anything())).once();
    });

    test('Should render a button component that calls the onclick handler', () => {
        const handler = jest.fn();
        render(
            <CommandContext.Provider
                value={{
                    eventEmitter: instance(mock(EventEmitter)),
                    dispatcher: instance(mockedDispatcher),
                }}
            >
                <ButtonComponent
                    onClick={Optional.of(handler)}
                    renderer={{
                        text: 'Button',
                    }}
                />
            </CommandContext.Provider>
        );

        fireEvent.click(screen.getByText('Button'));

        expect(screen.queryByText('Button')).toBeTruthy();
        expect(handler).toBeCalledTimes(1);
        verify(mockedDispatcher.dispatch(anything())).never();
    });
});
