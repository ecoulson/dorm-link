import { Prisma } from '@prisma/client';
import { anything, instance, mock, reset, verify, when } from 'ts-mockito';
import { LandlordBroker } from './landlord-broker';
import { Landlord } from './models/landlord';

describe('Landlord Broker Test Suite', () => {
    const mockedPrismaClient = mock<Prisma.LandlordDelegate<unknown>>();
    const broker = new LandlordBroker(instance(mockedPrismaClient));

    beforeEach(() => {
        reset(mockedPrismaClient);
    });

    test('Should insert a landlord', async () => {
        const expectedLandlord = new Landlord(
            'ecoulson@hmc.edu',
            'Evan',
            'Coulson'
        );
        const inputLandlord = expectedLandlord;
        when(mockedPrismaClient.create(anything())).thenResolve(
            expectedLandlord
        );

        const landlord = await broker.insert(inputLandlord);

        expect(landlord).toEqual(expectedLandlord);
        verify(mockedPrismaClient.create(anything())).once();
    });
});
