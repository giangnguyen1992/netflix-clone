import React from 'react';

import styles from '../styled/MovieTitle.module.scss';

const MovieTitle = (props) => {
    return (
        <div className={styles.MovieTitle}>{props.children}</div>
    );
};

export default MovieTitle;