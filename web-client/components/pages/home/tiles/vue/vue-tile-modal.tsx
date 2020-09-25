import * as React from 'react';
import './vue-tile-modal.scss';
import { Modal } from '~components/modal/modal';
import { GenericModalLayout } from '~components/modal/modal-layout/generic-modal-layout/generic-modal-layout';
import { TypographicalModalLayout } from '~components/modal/modal-layout/typographical-modal-layout/typographical-modal-layout';
import { IndentationBox } from '~components/shared/indentation-box/indentation-box';
import { store } from '~models/store';

const modalName = "VueTileModal";

export const VueTileModal = () => {
    return <Modal modal={store.app.modal} name={modalName}>
        <TypographicalModalLayout title="Vue.js">
            <div className="vue-tile-modal__content">
                <IndentationBox className="__warning-box">
                    <h3>⚠️ Warning</h3>
                    The following text describes my personal experiences and might be explained controversially.<br />
                    That's not a mere description of what technologies I use, but also what I think about them.<br />
                    <br />
                    If you get offended by my opinions, I don't care.
                </IndentationBox>
                <p>
                    The main work experience I had with frontend frameworks was with Vue.js, being used as a simple complement for a standard MVC server-rendered website, or for a single page application project.
                </p>
                <p>
                    While mantaining the code of the lowkey approach to frontend development oferred by Vue.js (embedding it in a previously existing page), I had to appreciate the <b>effectiveness</b> of the framework compared to other frontend libraries, including React.<br />
                    Nevertheless I found the code to be prone to become a "<b>big ball of mud</b>".
                </p>
                <p>
                    A single page application project in particular took me one and a half month, 8 hours per day, for completing it and allowed me to build a strong opinion about the framework:<br />
                    <ul>
                        <li>it's not scalable</li>
                        <li>the "plugin system" is a mess</li>
                        <li>the server-side rendering methodologies are prone to memory leak</li>
                        <li>it can be <b>really verbose</b></li>
                        <li>the transpilation process is <b>really slow</b> (the hmr itself is slow)</li>
                        <li>the typescript compatibility is awful (in v2)</li>
                        <li>the framework is not compatible with our development tools (not Vue.js's fault tbh)</li>
                    </ul>
                </p>
                <p>
                    I'm looking forward to the new (v3) version hoping I'll have an occasion to <b>try</b> it.
                </p>
                <p>
                    <b>Vue.js is one of the reasons I prefer React by far.</b>
                </p>
            </div>
        </TypographicalModalLayout>
    </Modal>;
};

VueTileModal.MODAL_NAME = modalName;