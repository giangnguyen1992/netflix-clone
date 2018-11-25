import React from 'react';

import Poster from './Poster';
import MovieTitle from './MovieTitle';
import MovieLengthYear from './MovieLengthYear';

import styles from '../styled/Movie.module.scss';

const Movie = ({poster, name, duration, year}) => {
    return (
        <div className={styles.Movie}>
            <Poster src={poster} alt={`Movie: ${name}`} />
            <MovieTitle>{name}</MovieTitle>
            <MovieLengthYear>{`${duration}${year}`}</MovieLengthYear>
        </div>
    );
};

export default Movie;