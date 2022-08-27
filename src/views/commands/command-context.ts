import React from 'react';
import { CreateListingCommandHandler } from '../listing/create-listing/create-listing-command-handler';
import { NetworkManager } from '../network/network-manager';
import { CommandDispatcher } from './command-dispatcher';
import { CommandRegistry } from './command-registry';
import axios from 'axios';
import { CommandType, EventEmitter } from '../../core';

const eventEmitter = new EventEmitter();
const networkManager = new NetworkManager('localhost:3000', axios);
const dispatcher = new CommandDispatcher(eventEmitter);

CommandRegistry.register(
    CommandType.CreateListing,
    new CreateListingCommandHandler(dispatcher, networkManager)
);

export const DefaultCommandContext = {
    eventEmitter,
    dispatcher,
};

export const CommandContext = React.createContext(DefaultCommandContext);
