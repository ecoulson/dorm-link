import { CommandRegistry } from './command-registry';
import { CommandType } from './command-type';

describe('Command Registry Test Suite', () => {
    beforeEach(() => {
        CommandRegistry.reset();
    });

    test('Should register the handler for a command type', () => {
        const result = CommandRegistry.register(CommandType.CreateListing, {
            handle: jest.fn(),
        });

        expect(result).toBeTruthy();
    });

    test('Should get the handler for a command type', () => {
        const expectedHandler = {
            handle: jest.fn(),
        };
        CommandRegistry.register(CommandType.CreateListing, expectedHandler);

        const inputHandler = CommandRegistry.getHandler(
            CommandType.CreateListing
        );

        expect(inputHandler).toEqual(expectedHandler);
    });

    test('Should throw an exception when a command is missing a handler', () => {
        expect(() =>
            CommandRegistry.getHandler(CommandType.CreateListing)
        ).toThrow(
            new Error(
                "Unhandled command 'CreateListing'. Please register it in the command registry"
            )
        );
    });
});
