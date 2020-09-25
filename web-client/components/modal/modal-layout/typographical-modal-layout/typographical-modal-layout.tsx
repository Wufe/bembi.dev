import * as React from 'react';
import './typographical-modal-layout.scss';

type TProps = {
    title?: string;
    actionsRenderer?: () => JSX.Element;
}

export const TypographicalModalLayout = (props: React.PropsWithChildren<TProps>) => {
    return <div className="modal typographical-modal-layout__component">
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
}