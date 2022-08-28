import { NextRouter } from 'next/router';
import { instance, mock, reset, verify } from 'ts-mockito';
import { RedirectCommand } from '../../core';
import { RedirectCommandHandler } from './redirect-command-handler';

describe('Redirect Command Handler Test Suite', () => {
    const mockedRouter = mock<NextRouter>();
    const handler = new RedirectCommandHandler(instance(mockedRouter));

    beforeEach(() => {
        reset(mockedRouter);
    });

    test('Should redirect the user to the desired page', async () => {
        const command = new RedirectCommand('/redirect/target');

        await handler.handle(command);

        verify(mockedRouter.push('/redirect/target')).once();
    });
});
