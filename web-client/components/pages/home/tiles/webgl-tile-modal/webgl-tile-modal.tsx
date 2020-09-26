import * as React from 'react';
import { Modal } from '~components/modal/modal';
import { TypographicalModalLayout } from '~components/modal/modal-layout/typographical-modal-layout/typographical-modal-layout';
import { store } from '~models/store';

const modalName = "WebGLTileModal";

export const WebGLTileModal = () => {
    return <Modal modal={store.app.modal} name={modalName}>
        <TypographicalModalLayout title="WebGL / Unity">
            <div className="webgl-tile-modal__content">
                <p>
                    Before the version 3 of the library <a href="https://github.com/wufe/react-particles-js" target="_blank">GitHub - Wufe/react-particles-js: Particles.js for React</a> the main core functionality was embedded into this package: it was a rewrite of the library "particles.js" in Typescript; I did it as a fun exercise.
                </p>
                <p>
                    From there I started learning about 2D/3D simulations and graphical effects following the channel <a href="https://www.youtube.com/user/shiffman" target="_blank">The Coding Train - Youtube</a> and reading Shiffman's book "The Nature of Code".
                </p>
                <p>
                    Being the only mantainer of the particles library and interested in the field of simulations, I wanted to find a way to accelerate the rendering of the animations in the browser.
                </p>
                <p>
                    That's how I approached WebGL.<br />
                    I didn't want to use abstraction libraries as Three.js: I wanted to learn how WebGL works.
                </p>
                <p>
                    Since then I can't say I learned a lot, but I'm currently writing some libraries like <a href="https://github.com/wufe/particles" target="_blank">GitHub - Wufe/particles: WIP Particles. A particles experiment</a> that are helping me discover new things.
                </p>
                <p>
                    Being interested in the 3D rendering technologies, I started learning about Unity.
                </p>
                <p>
                    The IDE itself is easy to learn and being a C# developer helped me a lot.<br />
                    The things that are challenging me (and I like the most) are writing shaders and build procedural structures.
                </p>
                <p>
                    That's why I'm currently trying to develop my online game, trying to merge all the skills in the different layers of the stack.<br />
                    The path is hard, but I like it.
                </p>
            </div>
        </TypographicalModalLayout>
    </Modal>;
};

WebGLTileModal.MODAL_NAME = modalName;