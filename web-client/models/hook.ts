import * as React from 'react';
import { IStore } from './store';

const RootContext = React.createContext<IStore | null>(null);

export const StoreContextProvider = RootContext.Provider;

export const useMobxStateTree = () => {
    const store = React.useContext(RootContext);

    if (!store)
        throw new Error('StoreContextProvider not rendered or invalid.');

    return store;
};