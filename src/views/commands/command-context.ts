import React from 'react';
import { EventEmitter } from '../event/event-emitter';
import { CommandDispatcher } from './command-dispatcher';

const eventEmitter = new EventEmitter();
export const CommandContext = React.createContext({
    eventEmitter,
    dispatcher: new CommandDispatcher(eventEmitter),
});
