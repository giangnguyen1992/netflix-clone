import { handleActions } from 'redux-actions';
import { SELECT_MOVIES } from '../constants/actionTypes';

export default handleActions(
    {
        [SELECT_MOVIES]: (state, actions) => actions.payload
    }, 
        1
);