import * as React from 'react';
import fullParticlesImage from '/assets/projects/particles/full.webp';
import fullFallbackParticlesImage from '/assets/projects/particles/full.jpg';
import fullAioImage from '/assets/projects/aio/full.webp';
import fullFallbackAioImage from '/assets/projects/aio/full.jpg';
import fullMonitoImage from '/assets/projects/monito/full.webp';
import fullFallbackMonitoImage from '/assets/projects/monito/full.jpg';
import fullWorkimeImage from '/assets/projects/workime/full.webp';
import fullFallbackWorkimeImage from '/assets/projects/workime/full.jpg';
import { ProjectLogo } from '../project-logo/project-logo';

export const Projects = () => {
    return <>
        <ProjectLogo
            header=""
            title="React Particles.js"
            image={fullParticlesImage}
            imageFallback={fullFallbackParticlesImage}
            link={{ url: 'https://rpj.bembi.dev' }}
            repoLink={{ label: 'Github', url: 'https://github.com/wufe/react-particles-js' }} />
        <ProjectLogo
            header=""
            title="AIO"
            image={fullAioImage}
            imageFallback={fullFallbackAioImage}
            link={{ url: 'https://ci.bembi.dev/?ref=demo' }} />
        <ProjectLogo
            header=""
            title="Mònito"
            image={fullMonitoImage}
            imageFallback={fullFallbackMonitoImage}
            link={{ url: 'https://monito.bembi.dev/' }}
            repoLink={{ label: 'Github', url: 'https://github.com/wufe/monito' }} />
        <ProjectLogo
            title="Workime"
            image={fullWorkimeImage}
            imageFallback={fullFallbackWorkimeImage}
            link={{ url: 'https://workime.bembi.dev/' }} />
    </>;
}