import * as React from 'react';
import { DotnetTileModal } from '../dotnet/dotnet-tile-modal';
import { GoTileModal } from '../go-tile-modal/go-tile-modal';
import { JavascriptTileModal } from '../javascript/javascript-tile-modal';
import { LinuxTileModal } from '../linux-tile-modal/linux-tile-modal';
import { NodeTileModal } from '../node-tile-modal/node-tile-modal';
import { ReactTileModal } from '../react-tile-modal/react-tile-modal';
import { SQLServerTileModal } from '../sql-server/sql-server-tile-modal';
import { VueTileModal } from '../vue/vue-tile-modal';
import { WebGLTileModal } from '../webgl-tile-modal/webgl-tile-modal';

export const TilesModals = () => <>
    <DotnetTileModal />
    <SQLServerTileModal />
    <JavascriptTileModal />
    <VueTileModal />
    <ReactTileModal />
    <NodeTileModal />
    <LinuxTileModal />
    <GoTileModal />
    <WebGLTileModal />
</>;