import React from 'react';
import { CreateListingCommandHandler } from '../listing/create-listing/create-listing-command-handler';
import { NetworkManager } from '../network/network-manager';
import { CommandDispatcher } from './command-dispatcher';
import { CommandRegistry } from './command-registry';
import axios from 'axios';
import { CommandType, EventEmitter } from '../../core';
import { CommandResolver } from './command-resolver';
import { RedirectCommandHandler } from '../navigation/redirect-command-handler';
import Router from 'next/router';

const eventEmitter = new EventEmitter();
const networkManager = new NetworkManager('http://localhost:3000', axios);
const dispatcher = new CommandDispatcher(eventEmitter);
const resolver = new CommandResolver(eventEmitter);
resolver.setup();

CommandRegistry.register(
    CommandType.CreateListing,
    new CreateListingCommandHandler(dispatcher, networkManager)
);
CommandRegistry.register(
    CommandType.Redirect,
    new RedirectCommandHandler(Router)
);

export const DefaultCommandContext = {
    eventEmitter,
    dispatcher,
};

export const CommandContext = React.createContext(DefaultCommandContext);
