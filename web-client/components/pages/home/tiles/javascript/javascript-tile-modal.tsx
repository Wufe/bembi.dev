import * as React from 'react';
import './javascript-tile-modal.scss';
import { Modal } from '~components/modal/modal';
import { GenericModalLayout } from '~components/modal/modal-layout/generic-modal-layout/generic-modal-layout';
import { TypographicalModalLayout } from '~components/modal/modal-layout/typographical-modal-layout/typographical-modal-layout';
import { IndentationBox } from '~components/shared/indentation-box/indentation-box';
import { store } from '~models/store';

const modalName = "JavascriptTileModal";

export const JavascriptTileModal = () => {
    return <Modal modal={store.app.modal} name={modalName}>
        <TypographicalModalLayout title="Javascript / jQuery">
            <div className="javascript-tile-modal__content">
                <IndentationBox className="__warning-box">
                    <h3>⚠️ Warning</h3>
                    The following text describes my personal experiences and might be explained controversially.<br />
                    That's not a mere description of what technologies I use, but also what I think about them.<br />
                    <br />
                    If you get offended by my opinions, I don't care.
                </IndentationBox>
                <p>
                    Despite being a fullstack developer, I have a <b>strong</b> predisposition for frontend hustles.<br />
                    My role keeps me busy mantaining the frontend source code of few of our company websites.
                </p>
                <p>
                    While trying to innovate and moving code to typescript, at the moment at work there's no real challenge, since we keep using vanilla javascript with a little usage of frontend frameworks.
                </p>
                <p>
                    We use a lot of jQuery.<br />
                    It is a nice choice, if you have lived under a rock for the past 10 years.
                </p>
                <p>
                    That's why I found myself very interested in studying the subject in the last few years by myself.
                </p>
                <p>
                    Before my first full-time job I was already studying and using <b>React</b> for personal projects.<br />
                    It was love at first sight, and I'm looking forward for an occasion to use it at its full potential.
                </p>
            </div>
        </TypographicalModalLayout>
    </Modal>;
};

JavascriptTileModal.MODAL_NAME = modalName;