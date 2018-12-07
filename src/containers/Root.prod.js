import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';

import store, { persiststore } from '../store/index';
import App from '../components/App';

import style from '../styled/Root.module.scss';
import '../styled/Global.scss';
import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persiststore} loading={null}>
                <div className={style.Root}>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                    <ToastContainer />
                </div>
            </PersistGate>
        </Provider>
    );
};

export default Root;