import { rootReducer } from './reducer';
import { createStore } from 'redux';

export const reduxStore = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());