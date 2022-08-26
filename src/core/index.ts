import 'reflect-metadata';
import { CoreModule } from './core-module';
import { ListingControllerAnnotation } from './listings/listing-annotations';
import { ListingController } from './listings/listing-controller';

const coreModule = new CoreModule();
coreModule.configure();

export const CoreLibrary = {
    listing: coreModule.resolve<ListingController>(ListingControllerAnnotation),
};

export { ListingController } from './listings/listing-controller';
export { Listing } from './listings/listing';
export { ContactInformation } from './listings/contact-information/contact-information';
export { EmailContactMethod } from './listings/contact-information/email-contact-method';
export { PhoneContactMethod } from './listings/contact-information/phone-contact-method';

export { RedirectCommand } from './navigation/redirect-command';

export { EventEmitter } from './events/event-emitter';
export { EventType } from './events/event-type';
export type { Event } from './events/event';

export type { Command } from './commands/command';
export { CommandType } from './commands/command-type';

export type { CreateListingRequest } from './listings/create-listing-request';
export type { GetListingRequest } from './listings/get-listing-request';
export type { SearchListingsRequest } from './listings/search-listings-request';
export { ContactMethodType } from './listings/contact-information/contact-method-type';
