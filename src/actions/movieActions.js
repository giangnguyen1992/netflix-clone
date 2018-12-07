import { createAction } from 'redux-actions';
import { normalize, schema } from 'normalizr';

import { apiPayloadCreator } from '../utils/apiPayloadCreator';
import { API, SET_MOVIES, SELECT_MOVIES } from '../constants/actionTypes';
import { GET_MOVIES } from '../constants/labels';

const getMoviesAC = createAction(API, apiPayloadCreator);

export const getMovies = () => {
    return getMoviesAC({url: '/vcvx0', onSuccess: setMovies, label: GET_MOVIES });
};

// wird aufgerufen wenn Daten erfolgreich gefetched sind und gibt sie weiter
 function setMovies(movies) {
    // Daten vom Server ist ein Array von Objekten und muss genormalized werden bevor sie zum reducer geleitet werden
    const movieSchema = new schema.Entity('movies');
    const movieListSchema = new schema.Array(movieSchema);
    // ein schema ist die Organisation von Strukturen für eine Datenbank
    const normalizedData = normalize(movies, movieListSchema);
    return {
        type: SET_MOVIES,
        payload: normalizedData.entities.movies
    };
};

export const selectMovie = createAction(SELECT_MOVIES);
