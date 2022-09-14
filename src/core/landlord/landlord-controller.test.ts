import { randomUUID } from 'crypto';
import { anyString, anything, instance, mock, verify, when } from 'ts-mockito';
import { Landlord } from './models/landlord';
import { LandlordController } from './landlord-controller';
import { LandlordService } from './landlord-service';
import { ToastCommand } from '../alerts/toast-command';
import { Toast } from '../alerts/toast';
import { ToastType } from '../alerts/toast-type';
import { RedirectCommand } from '../navigation/redirect-command';

describe('Landlord Controller Test Suite', () => {
    const mockedService = mock(LandlordService);
    const controller = new LandlordController(instance(mockedService));

    test('Should forward the landlord invitation request to the service', async () => {
        const expectedToast = new ToastCommand(
            new Toast(ToastType.Success, 'Toast', 100)
        );
        when(mockedService.invite(anyString(), anything())).thenResolve(
            expectedToast
        );

        const actualToast = await controller.invite({
            listingId: randomUUID(),
            landlord: {
                firstName: 'Evan',
                lastName: 'Coulson',
                email: 'ecoulson@hmc.edu',
            },
        });

        expect(actualToast).toEqual(expectedToast);
        verify(mockedService.invite(anyString(), anything())).once();
    });

    test('Should accept the invitation', async () => {
        const listingId = randomUUID();
        const expectedRedirect = new RedirectCommand(`/listing/${listingId}`);
        when(mockedService.accept(anyString(), anyString())).thenResolve(
            expectedRedirect
        );

        const actualRedirect = await controller.accept({
            landlordId: randomUUID(),
            listingId,
        });

        expect(actualRedirect).toEqual(expectedRedirect);
        verify(mockedService.accept(anyString(), anyString())).once();
    });

    test('Should decline the invitation', async () => {
        const expectedToast = new ToastCommand(
            new Toast(ToastType.Error, 'Toast', 100)
        );
        when(mockedService.decline(anyString(), anyString())).thenResolve(
            expectedToast
        );

        const actualToast = await controller.decline({
            landlordId: randomUUID(),
            listingId: randomUUID(),
        });

        expect(actualToast).toEqual(expectedToast);
        verify(mockedService.decline(anyString(), anyString())).once();
    });
});
