import * as React from 'react';
import { render } from 'react-dom';
import { App } from './components/app/app';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { reduxStore } from '~state/store';
import { store } from '~models/store';

render(
    <Provider store={reduxStore}>
        <BrowserRouter>
            <App modal={store.app.modal} />
        </BrowserRouter>
    </Provider>, document.getElementById('app'));