import React from 'react';
import { FormStorage } from './form-storage';

export const LocalFormStorage = new FormStorage();

export const FormContext = React.createContext({
    formStorage: LocalFormStorage,
});
