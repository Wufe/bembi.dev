import { Instance, types } from "mobx-state-tree";
import { App, initialAppState } from "./app/app";

export const RootStore = types
    .model({
        app: App
    });

export const store = RootStore.create({
    app: initialAppState
});

export interface IStore extends Instance<typeof store> {}

(window as any).store = store;