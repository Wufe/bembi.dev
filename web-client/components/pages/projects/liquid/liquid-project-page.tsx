import * as React from 'react';
import './liquid-project-page.scss';

const LiquidProjectDemo = React.lazy(() => import('~/components/projects/liquid/liquid-project-demo'));

export const LiquidProjectPage = () => {

    return <div className="liquid-project__page">
        <React.Suspense fallback="">
            <LiquidProjectDemo />
        </React.Suspense>
    </div>;
}

export default LiquidProjectPage;