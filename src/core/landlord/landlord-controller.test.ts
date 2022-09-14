import { randomUUID } from 'crypto';
import { anyString, anything, instance, mock, verify, when } from 'ts-mockito';
import { Landlord } from './landlord';
import { LandlordController } from './landlord-controller';
import { LandlordService } from './landlord-service';

describe('Landlord Controller Test Suite', () => {
    const mockedService = mock(LandlordService);
    const controller = new LandlordController(instance(mockedService));

    test('Should forward the landlord invitation request to the service', async () => {
        const expectedLandlord = new Landlord();
        when(mockedService.invite(anyString(), anything())).thenResolve(
            expectedLandlord
        );

        const actualLandlord = await controller.invite({
            listingId: randomUUID(),
            landlord: {
                firstName: 'Evan',
                lastName: 'Coulson',
                email: 'ecoulson@hmc.edu',
            },
        });

        expect(actualLandlord).toEqual(expectedLandlord);
        verify(mockedService.invite(anyString(), anything())).once();
    });

    test('Should accept the invitation', async () => {
        const expectedLandlordApproval = {
            approved: true,
        };
        when(mockedService.accept(anything())).thenResolve(
            expectedLandlordApproval
        );

        const actualLandlordApproval = await controller.accept({
            landlordId: randomUUID(),
            listingId: randomUUID(),
        });

        expect(actualLandlordApproval).toEqual(expectedLandlordApproval);
        verify(mockedService.accept(anything())).once();
    });

    test('Should decline the invitation', async () => {
        const expectedLandlordApproval = {
            approved: false,
        };
        when(mockedService.decline(anything())).thenResolve(
            expectedLandlordApproval
        );

        const actualLandlordApproval = await controller.decline({
            landlordId: randomUUID(),
            listingId: randomUUID(),
        });

        expect(actualLandlordApproval).toEqual(expectedLandlordApproval);
        verify(mockedService.decline(anything())).once();
    });
});
