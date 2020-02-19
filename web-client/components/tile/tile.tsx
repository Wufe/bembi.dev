import * as React from 'react';
import './tile.scss';
import { TileIcon } from './tile-icon';

export const Tile = (props: React.PropsWithChildren<{
    title: string;
    icon: string | React.ComponentType;
}>) => <div className="tile__component">
    <div className="tile__content">
        <TileIcon icon={props.icon} />
        <span className="tile__content-title">{props.title}</span>
    </div>
</div>