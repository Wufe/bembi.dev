import * as React from 'react';
import { Modal } from '~components/modal/modal';
import { TypographicalModalLayout } from '~components/modal/modal-layout/typographical-modal-layout/typographical-modal-layout';
import { store } from '~models/store';

const modalName = "ReactTileModal";

export const ReactTileModal = () => {
    return <Modal modal={store.app.modal} name={modalName}>
        <TypographicalModalLayout title="React / Typescript">
            <div className="react-tile-modal__content">
                <p>
                    The combination of these two is my favourite: React as the frontend library / framework, Typescript as the language of choice.<br />
                    Even if I had a little enterprise experience, <b>a lot</b> of personal work revolved around the usage of these two technologies.
                </p>
                <p>
                    <b>The React ecosystem made me love frontend development.</b>
                </p>
                <p>
                    My personal opinion about React is that:<br />
                    <ul>
                        <li>it is scalable</li>
                        <li>it is powerful</li>
                        <li>it requires a lot of discipline and team coordination to prevent creating chimeras</li>
                        <li>its ecosystem is full of resources</li>
                    </ul>
                </p>
                <p>
                    My favourite state management library is Redux, in conjunction with redux-sagas / redux-thunk, even though I recently started experimenting with mobx-state-tree, and I like it.
                </p>
                <p>
                    There's nothing to say about Typescript: it is <b>the best</b> and the only alternative to Javascript, at the same time.
                </p>
                <p>
                    Personal repositories using React / Typescript:<br />
                    <ul>
                        <li>
                            <a target="_blank" href="https://github.com/wufe/react-particles-js">GitHub - Wufe/react-particles-js: <b>Particles.js for React</b></a>
                        </li>
                        <li>
                            <a target="_blank" href="https://github.com/wufe/mapper">GitHub - Wufe/mapper: <b>Object to object mapper in Typescript - Inspired by Automapper</b></a>
                        </li>
                        <li>
                            <a target="_blank" href="https://github.com/wufe/bembi.dev">GitHub - Wufe/bembi.dev: <b>My personal page</b></a>
                        </li>
                        <li>
                            <a target="_blank" href="https://github.com/wufe/aio">GitHub - Wufe/aio: <b>Automation for Integrations and Operations</b></a>
                        </li>
                        <li>
                            <a target="_blank" href="https://github.com/wufe/workime">GitHub - Wufe/workime: <b>Workout schedules and timer</b></a>
                        </li>
                        <li>
                            <a target="_blank" href="https://github.com/wufe/monito">GitHub - Wufe/monito: <b>Queue based link status checker</b></a>
                        </li>
                    </ul>
                </p>
            </div>
        </TypographicalModalLayout>
    </Modal>;
};

ReactTileModal.MODAL_NAME = modalName;