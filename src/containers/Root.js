import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import store from '../store/index';
import DevTools from './DevTools';
import App from '../components/App';

import style from '../styled/Root.module.scss';
import '../styled/Global.scss';

const Root = () => {
    return (
        <Provider store={store}>
            <div className={style.Root}>
                <ToastContainer />
                <BrowserRouter>
                    <App />
                </BrowserRouter>
                <DevTools />
            </div>
        </Provider>
    );
};

export default Root;