import * as React from 'react';
import './app.scss';
import { FixedBackground } from '../fixed-background/fixed-background';
import { intersectionManager } from '../projects/projects-context';
import { Switch, Route } from 'react-router-dom';
import { Home } from '../pages/home/home';
import { RpjProjectPage } from '~/components/pages/projects/rpj/rpj-project-page';
import { LiquidProjectPage } from '~/components/pages/projects/liquid/liquid-project-page';
import { useModal } from '~components/modal/modal-hooks';
import { observer } from 'mobx-react';
import { IStore } from '~models/store';
import { IModal } from '~models/app/modal';

const showBackground = process.env.NODE_ENV === 'production';

type TProps = {
    modal: IModal;
}

export const App = observer((props: TProps) => {

    const [_, setIntersectedComponents] = React.useState(intersectionManager.components);

    const modal = props.modal;

    const visible = modal.visible;

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