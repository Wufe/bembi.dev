import * as React from 'react';
import './app.scss';
import { FixedBackground } from '../fixed-background/fixed-background';
import { intersectionManager } from '../projects/projects-context';
import { Switch, Route } from 'react-router-dom';
import { Home } from '../pages/home/home';
import { RpjProjectPage } from '~/components/pages/projects/rpj/rpj-project-page';
import { LiquidProjectPage } from '~/components/pages/projects/liquid/liquid-project-page';

export const App = () => {

    const [intersectedComponents, setIntersectedComponents] = React.useState(intersectionManager.components);

    React.useEffect(() => {
        intersectionManager.registerProvider(manager => {
            setIntersectedComponents({...manager.components});
        });
    });

    return <div className="app__container">
        <FixedBackground />
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
}