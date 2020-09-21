import { Instance, SnapshotOut, types } from 'mobx-state-tree';

export const Modal = types.model({
    name: types.optional(types.string, ""),
    visible: types.optional(types.boolean, false)
}).actions(self => ({
    show(name: string) {
        self.name = name;
        self.visible = true;
    },
    hide() {
        self.name = "";
        self.visible = false;
    }
}));

export interface IModal extends Instance<typeof Modal> {}

export const initialModalState = Modal.create({
    name: "",
    visible: false
})