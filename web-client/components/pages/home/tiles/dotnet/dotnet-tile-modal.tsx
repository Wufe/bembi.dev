import * as React from 'react';
import './dotnet-tile-modal.scss';
import { Modal } from '~components/modal/modal';
import { GenericModalLayout } from '~components/modal/modal-layout/generic-modal-layout/generic-modal-layout';
import { TypographicalModalLayout } from '~components/modal/modal-layout/typographical-modal-layout/typographical-modal-layout';
import { IndentationBox } from '~components/shared/indentation-box/indentation-box';
import { store } from '~models/store';

const modalName = "DotnetTileModal";

export const DotnetTileModal = () => {
    return <Modal modal={store.app.modal} name={modalName}>
        <TypographicalModalLayout title=".NET / C#">
            <div className="dotnet-tile-modal__content">
                <p>
                    I started using C# in the company I'm currenly working for.<br />
                    I Immediately loved how it was cleaner compared to object oriented languages.
                </p>
                <p>
                    That's why I chose C# as my main language of reference.
                </p>
                <p>
                    My daily work consists of using .NET and C# to develop and mantain enterprise solutions.<br />
                    In the last few months I have been switching from a feature-development and optimization point of view, to a more architectural one.
                </p>
                <p>
                    About that, my latest personal projects have been focused on architectural skills, trying to build solid domain driven applications based on clean architecture that are able to support a micro-service oriented scenario with scalability in mind.<br />
                    This is the perfect occasion for me to train using architectural patterns like messaging and CQRS.
                </p>
                <p>
                    <b>ASP.NET Core</b> is my framework of reference for every new project that requires some domain-driven CRUD backend.
                </p>
            </div>
        </TypographicalModalLayout>
    </Modal>;
};

DotnetTileModal.MODAL_NAME = modalName;