import axios from 'axios';
import { API } from '../constants/actionTypes';
import { apiEnd, apiStart } from '../actions/apiActions';

// axios default config
axios.defaults.baseURL = 'https://api.myjson.com/bins/';
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Authorization'] = `Bearer ${'fakeAccessToken'}`;

// actual middleware implementation
const api = ({ dispatch }) => next => action => {
    next(action);

    if (action.type !== API) {
        return;
    }

    const { url, method, data, onSuccess, onFailure, label } = action.payload;

    const dataOrParams = ['GET', 'DELETE'].includes(method) ? 'params' : 'data';

    // api requested has started
    if (label) {
        dispatch(apiStart(label));
    }
    // mkae actual request
    axios
        .request({
            url,
            method,
            [dataOrParams]: data
        })
        .then(({data}) => {
            dispatch(onSuccess(data));
        })
        .catch(error => {
            dispatch(onFailure(error));
        })
        .finally(() => {
            // api requested has ended
            if (label) {
                dispatch(apiEnd(label));
            }
        });
};

export default api