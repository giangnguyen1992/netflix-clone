import React from 'react';

import styles from '../styled/MovieTitle.module.scss';

const MovieTitle = (props) => {
    return (
        <div className={props.isLarge ? styles.MovieTitle__isLarge : styles.MovieTitle}>{props.children}</div>
    );
};

export default MovieTitle;