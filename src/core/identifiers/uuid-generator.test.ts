import { UUIDGenerator } from './uuid-generator';

describe('UUID Generation Test Suite', () => {
    const generationFunction = jest.fn(() => 'id');
    const generator = new UUIDGenerator(generationFunction);

    test('Should generate an id', () => {
        const result = generator.generate();

        expect(result).toEqual('id');
        expect(generationFunction).toBeCalledTimes(1);
    });
});
