import { createAction } from 'redux-actions';
import { normalize, schema } from 'normalizr';

import { apiPayloadCreator } from '../utils/apiPayloadCreator';
import { API, SET_MOVIES } from '../constants/actionTypes';

const getMoviesAC = createAction(API, apiPayloadCreator);

export const getMovies = () => getMoviesAC({url: '/vcvx0', onSuccess: setMovies});


function setMovies(movies) {
    const movieSchema = new schema.Entity('movies');
    const movieListSchema = new schema.Array(movieSchema);
    const normalizedData = normalize(movies, movieListSchema);
    return {
        type: SET_MOVIES,
        payload: normalizedData.entities.movies

    };
}