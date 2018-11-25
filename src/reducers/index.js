import { combineReducers} from 'redux';
import movies from './movies';
import selectedMovie from './selectedMovie';
import isLoading from './isLoading';

export default combineReducers({
    movies, // ES6 für movies: movies
    selectedMovie, //ES6 für selectedMovie: selectedMovie
    isLoading // ES6 für isLoading: isLoading
});