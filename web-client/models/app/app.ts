import { Instance, SnapshotOut, types } from "mobx-state-tree";
import { initialModalState, Modal } from "./modal";

export const App = types.model({
    modal: Modal
});

export interface IApp extends SnapshotOut<typeof App> {}

export const initialAppState: IApp = {
    modal: initialModalState
};