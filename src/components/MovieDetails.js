import React from 'react';

import FontAwesomeIcon from './FontAwesomeIcon';

import styles from '../styled/MovieDetails.module.scss';

const MovieDetails = () => {
    return (
        <div className={styles.MovieDetails}>
            <a className={styles.MovieDetails__Link} href='/'>
                <FontAwesomeIcon icon='chevron-left' text='Go Back' />
            </a>
        </div>
    );
};

export default MovieDetails;