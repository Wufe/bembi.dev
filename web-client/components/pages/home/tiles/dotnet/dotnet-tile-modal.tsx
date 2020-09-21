import * as React from 'react';
import { Modal } from '~components/modal/modal';
import { GenericModalLayout } from '~components/modal/modal-layout/generic-modal-layout/generic-modal-layout';
import { store } from '~models/store';

const modalName = "DotnetTileModal";

export const DotnetTileModal = () => {
    return <Modal modal={store.app.modal} name={modalName}>
        <GenericModalLayout title=".NET">
            Work in progress
        </GenericModalLayout>
    </Modal>;
};

DotnetTileModal.MODAL_NAME = modalName;