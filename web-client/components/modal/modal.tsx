import { observer } from 'mobx-react';
import * as React from 'react';
import { ModalContainer } from '~/components/modal/modal-container';
import { IModal } from '~models/app/modal';
import { IStore } from '~models/store';

export const Modal = observer((props: React.PropsWithChildren<{ name: string, modal: IModal }>) => {

    if (props.modal.name !== props.name)
        return null;

    return <ModalContainer modal={props.modal}>{props.children}</ModalContainer>;
})