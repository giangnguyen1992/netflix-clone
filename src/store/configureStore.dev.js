import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import DevTools from '../containers/DevTools';
import { persistStore } from 'redux-persist';

import api from '../middleware/api';
import rootReducer from '../reducers/index';
import toastMiddleware from '../middleware/toast';

const configureStore = (initialState) => {
    const store = createStore(
        rootReducer, 
        initialState, 
        compose (
            applyMiddleware(api, toastMiddleware, logger),
            DevTools.instrument()
        )
    );

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            store.replaceReducer(rootReducer)
        })
    }

    const persiststore = persistStore(store);
    return { store, persiststore };
};

export default configureStore;