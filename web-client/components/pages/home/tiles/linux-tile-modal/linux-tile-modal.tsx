import * as React from 'react';
import { Modal } from '~components/modal/modal';
import { TypographicalModalLayout } from '~components/modal/modal-layout/typographical-modal-layout/typographical-modal-layout';
import { store } from '~models/store';

const modalName = "LinuxTileModal";

export const LinuxTileModal = () => {
    return <Modal modal={store.app.modal} name={modalName}>
        <TypographicalModalLayout title="Linux / Docker">
            <div className="linux-tile-modal__content">
                <p>
                    Linux is my main operating system of choice for server infrastructures.<br />
                    Every personal project I develop is hosted on linux, proxied by some Nginx virtual host.
                </p>
                <p>
                    I love using the terminal in general and I like improving my knowledge of the commands.
                </p>
                <p>
                    About Docker, since I first heard of it in 2015 I fell in love with it, being a previously user of linux virtual machines.<br />
                    It's not the same thing, I know: in fact my personal development / deployment workflow paradigm shifted with it.
                </p>
                <p>
                    At the moment I like to host almost every side-project on Docker, and I'm looking forward for having a chance to learn Kubernetes, being a huge container fan.
                </p>
            </div>
        </TypographicalModalLayout>
    </Modal>;
};

LinuxTileModal.MODAL_NAME = modalName;