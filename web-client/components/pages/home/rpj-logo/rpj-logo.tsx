import * as React from 'react';
import './rpj-logo.scss';
import wideParticlesImage from '/assets/projects/particles/compressed-wide.jpg';
import { Link } from 'react-router-dom';

// const ParticlesContainer = React.lazy(() => import('./particles-container/particles-container') as Promise<any>)

export const RpjLogo = () => {

    const refContainer = React.useRef();

    React.useEffect(() => {

        if (refContainer && refContainer.current)
            // intersectionManager.register('rpj', refContainer.current);

        return () => {
            // intersectionManager.unregister('rpj');
        }
    })

    return <div className="rpj-project__component">
        <div className="__header-container">
            <span className="__title">
                React Particles
            </span>
            <div className="__actions-container">
                <a href="https://github.com/wufe/react-particles-js" target="_blank">Github</a>
            </div>
        </div>
        
        <div className="__particles-logo-container">
            <a
                href="https://rpj.bembi.dev"
                style={{
                    backgroundImage: `url('${wideParticlesImage}')`
                }}
                target="_blank"
                className="__particles-logo"></a>
            {/* <projectsContext.Consumer>{projects => {
                return <>
                    {projects.rpj && projects.rpj.visible && <React.Suspense fallback={<></>}>
                        <ParticlesContainer />
                    </React.Suspense>}
                    {(!projects.rpj || !projects.rpj.visible) && <div ref={refContainer}>!visible</div>}
                </>;
            }}</projectsContext.Consumer> */}
        </div>
        
    </div>;
}