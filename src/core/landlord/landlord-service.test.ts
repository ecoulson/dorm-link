import { randomUUID } from 'crypto';
import { anything, capture, instance, mock, verify, when } from 'ts-mockito';
import { EventEmitter } from '../events/event-emitter';
import { EmailNotification } from '../notifications/email-notification';
import { NotificationEvent } from '../notifications/notification-event';
import { Landlord } from './landlord';
import { LandlordBroker } from './landlord-broker';
import { LandlordService } from './landlord-service';

describe('Landlord Service Test Suite', () => {
    const mockedEventEmitter = mock(EventEmitter);
    const mockedBroker = mock(LandlordBroker);
    const service = new LandlordService(
        instance(mockedEventEmitter),
        instance(mockedBroker)
    );

    test('Should invite an email address to be a landlord for a listing', async () => {
        const listingId = randomUUID();
        const expectedNotification = new NotificationEvent(
            new EmailNotification(
                'ecoulson@hmc.edu',
                `Follow the following link to approve a subleting for http://fake-domain.com/landlord/approval?listingId=${listingId}&email=ecoulson@hmc.edu`
            )
        );
        const expectedLandlord = new Landlord(
            'ecoulson@hmc.edu',
            'Evan',
            'Coulson'
        );
        when(mockedBroker.insert(anything())).thenResolve(expectedLandlord);
        process.env.API_BASE_URL = 'fake-domain.com';

        const actualLandlord = await service.invite(listingId, {
            firstName: 'Evan',
            lastName: 'Coulson',
            email: 'ecoulson@hmc.edu',
        });

        expect(actualLandlord).toEqual(expectedLandlord);
        verify(mockedBroker.insert(anything())).once();
        verify(mockedEventEmitter.fire(anything())).once();
        const [event] = capture(mockedEventEmitter.fire).last();
        expect(event).toEqual(expectedNotification);
    });
});
