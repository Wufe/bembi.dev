import * as React from 'react';
import './home.scss';
import { Section, SectionAlignment, SectionTitle } from '~/components/section/section';
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
import { store } from '~models/store';
import { SQLServerTileModal } from './tiles/sql-server/sql-server-tile-modal';
import { JavascriptTileModal } from './tiles/javascript/javascript-tile-modal';
import { VueTileModal } from './tiles/vue/vue-tile-modal';
import { ReactTileModal } from './tiles/react-tile-modal/react-tile-modal';

export const Home = () => {

    const [intersectedComponents, setIntersectedComponents] = React.useState(intersectionManager.components);
    const { modal } = store.app;

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
                <Tile title=".NET" icon="devicon-dot-net-plain" onClick={() => modal.show(DotnetTileModal.MODAL_NAME)} />
                <Tile title="C#" icon="devicon-csharp-plain" onClick={() => modal.show(DotnetTileModal.MODAL_NAME)} />
                <Tile title="SQL Server" icon={SqlServerIcon} onClick={() => modal.show(SQLServerTileModal.MODAL_NAME)} />
                <Tile title="JS" icon="devicon-javascript-plain" onClick={() => modal.show(JavascriptTileModal.MODAL_NAME)} />
                <Tile title="jQuery" icon="devicon-jquery-plain" onClick={() => modal.show(JavascriptTileModal.MODAL_NAME)} />
                <Tile title="Vue.js" icon="devicon-vuejs-plain" onClick={() => modal.show(VueTileModal.MODAL_NAME)} />
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
                <Tile title="Node.js" icon="devicon-nodejs-plain" />
                <Tile title="React" icon="devicon-react-original" onClick={() => modal.show(ReactTileModal.MODAL_NAME)} />
                <Tile title="Typescript" icon="devicon-typescript-plain" onClick={() => modal.show(ReactTileModal.MODAL_NAME)} />
                <Tile title="Go" icon="devicon-go-plain" />
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