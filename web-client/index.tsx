import * as React from 'react';
import { render } from 'react-dom';
import { App } from './components/app/app';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { reduxStore } from '~state/store';
import { store } from '~models/store';
import { StoreContextProvider } from '~models/hook';

render(
    <Provider store={reduxStore}>
        <StoreContextProvider value={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </StoreContextProvider>
    </Provider>, document.getElementById('app'));