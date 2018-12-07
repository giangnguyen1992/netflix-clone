import React from 'react';

import styles from '../styled/HeaderTitle.module.scss';

const headerTitle = (props) => {
    return (
        <h1 className={styles.HeaderTitle}>{props.children}</h1>
    );
};

export default headerTitle;