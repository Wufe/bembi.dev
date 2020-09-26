import * as React from 'react';
import { Modal } from '~components/modal/modal';
import { TypographicalModalLayout } from '~components/modal/modal-layout/typographical-modal-layout/typographical-modal-layout';
import { store } from '~models/store';

const modalName = "GoTileModal";

export const GoTileModal = () => {
    return <Modal modal={store.app.modal} name={modalName}>
        <TypographicalModalLayout title="Go">
            <div className="go-tile-modal__content">
                <p>
                    Even though Go is meant to be a multi-purpose language, I use it mainly for low-level parallelizable work like for writing web services that requires a worker queue or for writing system-level tools that require portability and speed.
                </p>
                <p>
                    My knowledge of Go is not the best: I'm currently learning and experimenting with it.<br />
                    The main feature I like is "channels": the ability to share messages instead of memory allows me to choose it as the language to go for writing background workers.
                </p>
                <p>
                    I tried to use it for making backend presentation-level serving services, but I didn't like it: I prefer more structured solutions like ASP.NET Core.
                </p>
                <p>
                    Examples of usage:
                    <ul>
                        <li>
                            <a target="_blank" href="https://github.com/wufe/bembi.dev">GitHub - Wufe/bembi.dev: <b>My personal page</b></a>
                        </li>
                        <li>
                            <a target="_blank" href="https://github.com/wufe/monito">GitHub - Wufe/monito: <b>Queue based link status checker</b></a>
                        </li>
                        <li>
                            <a target="_blank" href="https://github.com/wufe/diff-tool">GitHub - Wufe/diff-tool: <b>Lines diff tool tuned for performance</b></a>
                        </li>
                    </ul>
                </p>
            </div>
        </TypographicalModalLayout>
    </Modal>;
};

GoTileModal.MODAL_NAME = modalName;