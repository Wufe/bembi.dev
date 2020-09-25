import * as React from 'react';
import { render } from 'react-dom';
import { App } from './components/app/app';
import { BrowserRouter } from 'react-router-dom';
import { store } from '~models/store';
import { StoreContextProvider } from '~models/hook';

render(
    <StoreContextProvider value={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StoreContextProvider>, document.getElementById('app'));