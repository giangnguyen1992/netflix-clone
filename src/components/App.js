import React from 'react';
import { Route } from 'react-router-dom';
import MovieDetails from './MovieDetails';
import MoviesContainer from '../containers/MoviesContainer';

import style from '../styled/App.module.scss';

const App = () => {
    return (
        <section className={style.StyledMovieContainer}>
            <Route exact path='/' component={MoviesContainer} />
            <Route exact path='/movies/:id' component={MovieDetails} />
        </section>
    );
};

export default App;