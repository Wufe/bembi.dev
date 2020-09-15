import * as React from 'react';
import { Modal } from '~components/modal/modal';
import { GenericModalLayout } from '~components/modal/modal-layout/generic-modal-layout/generic-modal-layout';

const modalName = "DotnetTileModal";

export const DotnetTileModal = () => {



    return <Modal name={modalName}>
        <GenericModalLayout title=".NET">
            Work in progress
        </GenericModalLayout>
    </Modal>;
};

DotnetTileModal.MODAL_NAME = modalName;