import * as React from 'react';
import { Modal } from '~components/modal/modal';
import { TypographicalModalLayout } from '~components/modal/modal-layout/typographical-modal-layout/typographical-modal-layout';
import { IndentationBox } from '~components/shared/indentation-box/indentation-box';
import { store } from '~models/store';

const modalName = "SQLServerTileModal";

export const SQLServerTileModal = () => {
    return <Modal modal={store.app.modal} name={modalName}>
        <TypographicalModalLayout title="SQL Server">
            <div className="sql-server-modal__content">
                <p>
                    Lots of data in the company I'm currently working for, revolves around SQL Server.<br />
                    It is heavily used for relational data store and analytics.
                </p>
                <p>
                    Given my previous understanding of relation databases like MySQL or Sqlite, switching to SQL Server was quite easy.
                </p>
                <p>
                    I'm also enjoying using third-party tools like Azure Data Studio to experiment with some fresh features like "Notebooks".
                </p>
            </div>
        </TypographicalModalLayout>
    </Modal>;
};

SQLServerTileModal.MODAL_NAME = modalName;