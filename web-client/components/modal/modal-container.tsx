import * as React from 'react';
import { createPortal } from 'react-dom';
import { useModal } from '~/components/modal/modal-hooks';
import { IModal } from '~models/app/modal';
import './modal-container.scss';

export const ModalContainer = ({ children, modal }: React.PropsWithChildren<{ modal: IModal }>) => {

    return createPortal(<div className={`modal-container__container ${modal.visible ? '--visible' : ''}`} onClick={() => modal.hide()}>
        <div className={`__modal`} onClick={e => e.stopPropagation()}>
            {children}
        </div>
    </div>, document.getElementById('modal-root')!);
}