import * as React from 'react';
import './tile-icon.scss';

export const TileIcon = (props: React.PropsWithChildren<{
    icon: string | React.ComponentType;
}>) => <div className="tile-icon__component">
    {typeof props.icon === 'string' && <i className={`tile-icon__image ${props.icon}`}></i>}
    {typeof props.icon !== 'string' && <div className="tile-icon__external-icon">
        <props.icon />
    </div>}
</div>