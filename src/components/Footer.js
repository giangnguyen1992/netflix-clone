import React from 'react';

import styles from '../styled/Footer.module.scss';

const Footer = (props) => {
    return (
        <footer className={styles.Footer}>{props.children}</footer>
    );
};

export default Footer;