import { randomUUID } from 'crypto';
import {
    anything,
    capture,
    instance,
    mock,
    reset,
    verify,
    when,
} from 'ts-mockito';
import { Toast } from '../alerts/toast';
import { ToastCommand } from '../alerts/toast-command';
import { ToastType } from '../alerts/toast-type';
import { Environment } from '../environment/environment';
import { EventEmitter } from '../events/event-emitter';
import { EmailNotification } from '../notifications/email-notification';
import { NotificationEvent } from '../notifications/notification-event';
import { LandlordBroker } from './landlord-broker';
import { LandlordService } from './landlord-service';
import { Landlord } from './models/landlord';

describe('Landlord Service Test Suite', () => {
    const mockedEventEmitter = mock(EventEmitter);
    const mockedBroker = mock(LandlordBroker);
    const mockedEnvironment = mock(Environment);
    const service = new LandlordService(
        instance(mockedEventEmitter),
        instance(mockedBroker),
        instance(mockedEnvironment)
    );

    beforeEach(() => {
        reset(mockedEnvironment);
        reset(mockedEventEmitter);
        reset(mockedBroker);
    });

    test('Should invite an email address to be a landlord for a listing', async () => {
        const listingId = randomUUID();
        const expectedNotification = new NotificationEvent(
            new EmailNotification(
                'ecoulson@hmc.edu',
                `Follow the following link to approve a subletting http://fake-domain.com/landlord/approval?listingId=${listingId}&email=ecoulson@hmc.edu`
            )
        );
        const expectedToastCommand = new ToastCommand(
            new Toast(
                ToastType.Success,
                `Sent invite to ecoulson@hmc.edu`,
                3000
            )
        );
        when(mockedBroker.insert(anything())).thenResolve(
            new Landlord('ecoulson@hmc.edu', 'Evan', 'Coulson')
        );
        when(mockedEnvironment.get('API_BASE_URL')).thenReturn(
            'http://fake-domain.com'
        );

        const toastCommand = await service.invite(listingId, {
            firstName: 'Evan',
            lastName: 'Coulson',
            email: 'ecoulson@hmc.edu',
        });

        expect(toastCommand).toEqual(expectedToastCommand);
        verify(mockedBroker.insert(anything())).once();
        verify(mockedEventEmitter.fire(anything())).once();
        const [event] = capture(mockedEventEmitter.fire).last();
        expect(event).toEqual(expectedNotification);
    });
});
