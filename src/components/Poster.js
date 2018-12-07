import React from 'react';

import styles from '../styled/Poster.module.scss';

const Poster = (props) => {
    return (
        <img className={props.isExpanded ? styles.Poster__isExpanded : styles.Poster} src={props.src} alt={props.alt} />
    );
};

export default Poster;