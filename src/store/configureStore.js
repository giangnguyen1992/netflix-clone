import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import DevTools from '../containers/DevTools';
import api from '../middleware/api';
import rootReducer from '../reducers/index';

const configureStore = (initialState) => {
    const store = createStore(
        rootReducer, 
        initialState, 
        compose (
            applyMiddleware(logger, api),
            DevTools.instrument()
        )
    );

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            store.replaceReducer(rootReducer)
        })
    }

    return store;
};

export default configureStore;