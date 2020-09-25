import * as React from 'react';
import './indentation-box.scss';

type TProps = {
    className?: string;
}

export const IndentationBox = (props: React.PropsWithChildren<TProps>) => {
    return <div className={`indentation-box__component ${props.className || ''}`}>
        <div className="__paragraph">{props.children}</div>
    </div>
}