import React from 'react';

import styles from '../styled/MovieContainer.module.scss';

const movieContainer = (props) => {
    return (
        <section className={styles.MovieContainer}>{props.children}</section>
    );
};

export default movieContainer;