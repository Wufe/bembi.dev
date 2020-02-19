import * as React from 'react';
import './rpj-project-page.scss';

const RpjProjectDemo = React.lazy(() => import('~/components/projects/rpj/rpj-project-demo'));

export const RpjProjectPage = () => {

    return <div className="rpj-project__page">
        <React.Suspense fallback="">
            <RpjProjectDemo />
        </React.Suspense>
    </div>;
}

export default RpjProjectPage;