import * as React from 'react';
import { Section, SectionAlignment } from '~/components/section/section';
import { Tile } from '~/components/tile/tile';
import { SqlServerIcon } from '~/components/icons/sql-server-icon';
import { Contacts } from '~/components/contacts/contacts';
import { RpjLogo } from './rpj-logo/rpj-logo';
import { projectsContext, intersectionManager } from '~/components/projects/projects-context';
import { HomeMenu } from '~/components/pages/home/menu/home-menu';
import { Header } from '~/components/header/header';
import { MonitoLogo } from './monito-logo/monito-logo';

export const Home = () => {

    const [intersectedComponents, setIntersectedComponents] = React.useState(intersectionManager.components);

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
                <Tile title=".NET" icon="devicon-dot-net-plain" />
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
                <RpjLogo />
                <MonitoLogo />
            </Section>
        </projectsContext.Provider>
        
        
    </>
}