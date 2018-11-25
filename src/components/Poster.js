import React from 'react';

import styles from '../styled/Poster.module.scss';

const Poster = (props) => {
    return (
        <img className={styles.Poster__img} src={props.src} alt={props.alt} />
    );
};

export default Poster;