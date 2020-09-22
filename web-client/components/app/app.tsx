import * as React from 'react';
import './app.scss';
import { FixedBackground } from '../fixed-background/fixed-background';
import { intersectionManager } from '../projects/projects-context';
import { Switch, Route } from 'react-router-dom';
import { Home } from '../pages/home/home';
import { RpjProjectPage } from '~/components/pages/projects/rpj/rpj-project-page';
import { LiquidProjectPage } from '~/components/pages/projects/liquid/liquid-project-page';
import { observer } from 'mobx-react';
import { useMobxStateTree } from '~models/hook';

const showBackground = process.env.NODE_ENV === 'production';

export const App = observer(() => {

    const [, setIntersectedComponents] = React.useState(intersectionManager.components);

    const {
        app: {
            modal: {
                visible
            }
        }
    } = useMobxStateTree();

    React.useEffect(() => {
        intersectionManager.registerProvider(manager => {
            setIntersectedComponents({...manager.components});
        });
    });

    return <div className={`app__container ${visible ? '--blurred' : ''}`}>
        {showBackground && <FixedBackground />}
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/projects/rpj">
                <RpjProjectPage />
            </Route>
            <Route path="/projects/liquid">
                <LiquidProjectPage />
            </Route>
        </Switch>
        
        
    </div>
});