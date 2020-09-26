import * as React from 'react';
import { Modal } from '~components/modal/modal';
import { TypographicalModalLayout } from '~components/modal/modal-layout/typographical-modal-layout/typographical-modal-layout';
import { store } from '~models/store';

const modalName = "NodeTileModal";

export const NodeTileModal = () => {
    return <Modal modal={store.app.modal} name={modalName}>
        <TypographicalModalLayout title="Node.js">
            <div className="node-tile-modal__content">
                <p>
                    Being in the frontend development environment nowadays means knowing Node.js a lot, but I mainly use it as a tool for writing helper utils or tools fast and effortlessly.
                </p>
                <p>
                    In the past I used it for this big side project: it was an IRC Client made with Node/Webkit that was part of a bigger infrastructure used for scraping the web and linking content found within the IRC servers.<br />
                    At that time my Javascript knowledge was very poor and the roadmap was constantly obstructed by external parties, so the application never saw a release.
                </p>
                <p>
                    I also tried using it to build entire web backend infrastructures out of it, but it's not really my thing.<br />
                    For a backend architecture I prefer using something more structured like ASP.NET Core.
                </p>
                <p>
                    Example side project, built using Node.js on the backend with SSR:<br />
                    <a target="_blank" href="https://github.com/wufe/open-gallery">GitHub - Wufe/open-gallery</a>
                </p>
            </div>
        </TypographicalModalLayout>
    </Modal>;
};

NodeTileModal.MODAL_NAME = modalName;