import React from 'react';
import { CreateListingCommandHandler } from '../listing/create-listing/create-listing-command-handler';
import { NetworkManager } from '../network/network-manager';
import { CommandDispatcher } from './command-dispatcher';
import { CommandRegistry } from './command-registry';
import axios from 'axios';
import { CommandType, EventEmitter } from '../../core';
import { SubmitFormHandler } from '../forms/submit-form-handler';
import { LocalFormStorage } from '../forms/form-context';
import { CommandResolver } from './command-resolver';

const eventEmitter = new EventEmitter();
const networkManager = new NetworkManager('localhost:3000', axios);
const dispatcher = new CommandDispatcher(eventEmitter);
const resolver = new CommandResolver(eventEmitter);
resolver.setup();

CommandRegistry.register(
    CommandType.CreateListing,
    new CreateListingCommandHandler(dispatcher, networkManager)
);
CommandRegistry.register(
    CommandType.SubmitForm,
    new SubmitFormHandler(eventEmitter, LocalFormStorage)
);

export const DefaultCommandContext = {
    eventEmitter,
    dispatcher,
};

export const CommandContext = React.createContext(DefaultCommandContext);
