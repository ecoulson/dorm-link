import { Injectable } from 'noose-injection';
import { EventEmitterAnnotation } from '../events/event-annotations';
import { EventEmitter } from '../events/event-emitter';
import { EmailNotification } from '../notifications/email-notification';
import { NotificationEvent } from '../notifications/notification-event';
import { Landlord } from './landlord';
import { LandlordAction } from './landlord-action';
import { LandlordBrokerAnnotation } from './landlord-annotations';
import { LandlordBroker } from './landlord-broker';
import { LandlordApprovalActionRequest } from './requests/landlord-approval-action-request';
import { LandlordParameters } from './requests/landlord-parameters';

@Injectable()
export class LandlordService {
    constructor(
        @EventEmitterAnnotation.inject()
        private readonly eventEmitter: EventEmitter,
        @LandlordBrokerAnnotation.inject()
        private readonly broker: LandlordBroker
    ) {}

    async invite(
        listingId: string,
        landlordParameters: LandlordParameters
    ): Promise<Landlord> {
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
                    `Follow the following link to approve a subleting for http://${process.env.API_BASE_URL}/landlord/approval?listingId=${listingId}&email=${landlord.email}`
                )
            )
        );
        return landlord;
    }

    accept(request: LandlordApprovalActionRequest): Promise<LandlordAction> {
        throw new Error();
    }

    decline(request: LandlordApprovalActionRequest): Promise<LandlordAction> {
        throw new Error();
    }
}
