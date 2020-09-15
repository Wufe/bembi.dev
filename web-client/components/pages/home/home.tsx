import * as React from 'react';
import './home.scss';
import { Section, SectionAlignment } from '~/components/section/section';
import { Tile } from '~/components/tile/tile';
import { SqlServerIcon } from '~/components/icons/sql-server-icon';
import { Contacts } from '~/components/contacts/contacts';
import { RpjLogo } from './rpj-logo/rpj-logo';
import { projectsContext, intersectionManager } from '~/components/projects/projects-context';
import { HomeMenu } from '~/components/pages/home/menu/home-menu';
import { Header } from '~/components/header/header';
import { MonitoLogo } from './monito-logo/monito-logo';
import { ProjectLogo } from './project-logo/project-logo';
import { Projects } from './projects/projects';
import { UnityIcon } from '~components/icons/unity-icon';
import { WebGLIcon } from '~components/icons/webgl';
import { useModal } from '~components/modal/modal-hooks';
import { DotnetTileModal } from './tiles/dotnet/dotnet-tile-modal';
import { TilesModals } from './tiles/modals/tiles-modals';

export const Home = () => {

    const [intersectedComponents, setIntersectedComponents] = React.useState(intersectionManager.components);
    const { show } = useModal();

    React.useEffect(() => {
        intersectionManager.registerProvider(manager => {
            setIntersectedComponents({...manager.components});
        });
    });

    return <>
        <Header />
        <HomeMenu />
        <Section
            id="technologies"
            title="Day-time developer"
            alignment={SectionAlignment.LEFT}
            grid={true}>
            <>
                <Tile title=".NET" icon="devicon-dot-net-plain" onClick={() => show(DotnetTileModal.MODAL_NAME)} />
                <Tile title="C#" icon="devicon-csharp-plain" />
                <Tile title="SQL Server" icon={SqlServerIcon} />
                <Tile title="JS" icon="devicon-javascript-plain" />
                <Tile title="jQuery" icon="devicon-jquery-plain" />
                <Tile title="Vue.js" icon="devicon-vuejs-plain" />
            </>
        </Section>
        <Section
            title="Night-time explorer"
            alignment={SectionAlignment.RIGHT}
            theme="negative"
            accent="blue"
            spaced={true}
            large={true}
            grid={true}>
            <>
                <Tile title="Linux" icon="devicon-linux-plain" />
                <Tile title="Docker" icon="devicon-docker-plain" />
                <Tile title="Go" icon="devicon-go-plain" />
                <Tile title="Node.js" icon="devicon-nodejs-plain" />
                <Tile title="React" icon="devicon-react-original" />
                <Tile title="Typescript" icon="devicon-typescript-plain" />
                <Tile title="Unity" icon={UnityIcon} />
                <Tile title="WebGL" icon={WebGLIcon} />
            </>
        </Section>
        <Contacts id="contacts" />
        <projectsContext.Provider value={intersectedComponents}>
            <Section
                id="projects"
                title="Projects"
                alignment={SectionAlignment.LEFT}
                theme="negative"
                spaced={true}
                large={true}
                grid={false}>
                <Projects />
            </Section>
        </projectsContext.Provider>
        <TilesModals />
        
    </>
}