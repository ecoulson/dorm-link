import { Injectable } from 'noose-injection';
import { Environment } from '../environment/environment';
import { EnvironmentAnnotation } from '../environment/environment-annotations';
import { EventEmitterAnnotation } from '../events/event-annotations';
import { EventEmitter } from '../events/event-emitter';
import { EmailNotification } from '../notifications/email-notification';
import { NotificationEvent } from '../notifications/notification-event';
import { Landlord } from './models/landlord';
import { LandlordBrokerAnnotation } from './landlord-annotations';
import { LandlordBroker } from './landlord-broker';
import { LandlordApprovalActionRequest } from './requests/landlord-approval-action-request';
import { LandlordParameters } from './requests/landlord-parameters';
import { RedirectCommand } from '../navigation/redirect-command';
import { ToastCommand } from '../alerts/toast-command';
import { Toast } from '../alerts/toast';
import { ToastType } from '../alerts/toast-type';

@Injectable()
export class LandlordService {
    constructor(
        @EventEmitterAnnotation.inject()
        private readonly eventEmitter: EventEmitter,
        @LandlordBrokerAnnotation.inject()
        private readonly broker: LandlordBroker,
        @EnvironmentAnnotation.inject()
        private readonly environment: Environment
    ) {}

    async invite(
        listingId: string,
        landlordParameters: LandlordParameters
    ): Promise<ToastCommand> {
        const landlord = await this.broker.insert(
            new Landlord(
                landlordParameters.email,
                landlordParameters.firstName,
                landlordParameters.lastName
            )
        );
        this.eventEmitter.fire(
            new NotificationEvent(
                new EmailNotification(
                    landlord.email,
                    `Follow the following link to approve a subletting ${this.environment.get(
                        'API_BASE_URL'
                    )}/landlord/approval?listingId=${listingId}&email=${
                        landlord.email
                    }`
                )
            )
        );
        return new ToastCommand(
            new Toast(
                ToastType.Success,
                `Sent invite to ${landlord.email}`,
                3000
            )
        );
    }

    accept(request: LandlordApprovalActionRequest): Promise<RedirectCommand> {
        throw new Error();
    }

    decline(request: LandlordApprovalActionRequest): Promise<ToastCommand> {
        throw new Error();
    }
}
