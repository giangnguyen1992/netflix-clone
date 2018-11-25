import React from 'react';

import styles from '../styled/MovieLengthYear.module.scss';

const MovieLengthYear = (props) => {
    return (
        <div className={styles.MovieLengthYear}>{props.children}</div>
    );
};

export default MovieLengthYear;