import { combineReducers} from 'redux';
import movies from './movies';
import selectedMovie from './selectedMovie';

export default combineReducers({
    movies, // ES6 für movies: movies
    selectedMovie //ES6 für selectedMovie: selectedMovie
});