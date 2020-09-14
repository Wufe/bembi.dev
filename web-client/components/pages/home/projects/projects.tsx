import * as React from 'react';
import fullParticlesImage from '/assets/projects/particles/full.webp';
import fullAioImage from '/assets/projects/aio/full.webp';
import fullMonitoImage from '/assets/projects/monito/full.webp';
import fullWorkimeImage from '/assets/projects/workime/full.webp';
import { ProjectLogo } from '../project-logo/project-logo';

export const Projects = () => {
    return <>
        <ProjectLogo
            header=""
            title="React Particles.js"
            image={fullParticlesImage}
            link={{ url: 'https://rpj.bembi.dev' }}
            repoLink={{ label: 'Github', url: 'https://github.com/wufe/react-particles-js' }} />
        <ProjectLogo
            header=""
            title="AIO"
            image={fullAioImage}
            link={{ url: 'https://ci.bembi.dev/?ref=demo' }}
            logoStyles={{
                backgroundPositionY: '1%',
                backgroundPositionX: '50%'
            }} />
        <ProjectLogo
            header=""
            title="Mònito"
            image={fullMonitoImage}
            link={{ url: 'https://monito.bembi.dev/' }}
            repoLink={{ label: 'Github', url: 'https://github.com/wufe/monito' }}
            logoStyles={{
                backgroundPositionY: '0%',
                backgroundSize: 'auto 230%'
            }} />
        <ProjectLogo
            title="Workime"
            image={fullWorkimeImage}
            link={{ url: 'https://workime.bembi.dev/' }}
            logoStyles={{
                backgroundPositionY: '15%'
            }} />
    </>;
}