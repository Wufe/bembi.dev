import * as React from 'react';
import { DotnetTileModal } from '../dotnet/dotnet-tile-modal';
import { JavascriptTileModal } from '../javascript/javascript-tile-modal';
import { ReactTileModal } from '../react-tile-modal/react-tile-modal';
import { SQLServerTileModal } from '../sql-server/sql-server-tile-modal';
import { VueTileModal } from '../vue/vue-tile-modal';

export const TilesModals = () => <>
    <DotnetTileModal />
    <SQLServerTileModal />
    <JavascriptTileModal />
    <VueTileModal />
    <ReactTileModal />
</>;