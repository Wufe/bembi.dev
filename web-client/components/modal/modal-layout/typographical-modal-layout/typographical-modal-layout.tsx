import { observer } from 'mobx-react';
import * as React from 'react';
import { store } from '~models/store';
import './typographical-modal-layout.scss';

type TProps = {
    title?: string;
    actionsRenderer?: () => JSX.Element;
}

export const TypographicalModalLayout = observer((props: React.PropsWithChildren<TProps>) => {
    return <div className="modal typographical-modal-layout__component">
        <div className="__close-button" onClick={store.app.modal.hide}>X</div>
        {props.title && <div className="__header">
            <h1>{props.title}</h1>
        </div>}
        <div className="__content">
            {props.children}
        </div>
        <div className="__actions-container">
            {props.actionsRenderer && props.actionsRenderer()}
        </div>
    </div>
});