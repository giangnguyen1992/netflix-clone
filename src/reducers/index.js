import { combineReducers} from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import movies from './movies';
import selectedMovie from './selectedMovie';
import isLoading from './isLoading';

const rootReducer = combineReducers({
    movies, // ES6 für movies: movies
    selectedMovie, //ES6 für selectedMovie: selectedMovie
    isLoading // ES6 für isLoading: isLoading
});

const persistConfig = {
    key: 'netflixy',
    storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;