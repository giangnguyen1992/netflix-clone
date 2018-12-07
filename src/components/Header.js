import React from "react";

import FontAwesomeIcon from "./FontAwesomeIcon";
import HeaderTitle from "./StyledHeaderTitle";

import styles from '../styled/Header.module.scss';

const header = () => (
  <header className={styles.Header}>
    <FontAwesomeIcon icon="bars" text="help" />
    <HeaderTitle>The Movie Recommender</HeaderTitle>
    <FontAwesomeIcon icon="search" />
  </header>
);
export default header;