import React from 'react';
import { Route } from 'react-router-dom';

import MovieContainer from './MovieContainer';
import MoviesContainer from "../containers/MoviesContainer";
import MovieDetailsContainer from "../containers/MovieDetailsContainer";


const app = () => {
    return (
        <MovieContainer>
            <Route exact path='/' component={MoviesContainer} />
            <Route exact path='/movies/:id' component={MovieDetailsContainer} />
        </MovieContainer>
    );
};

export default app;