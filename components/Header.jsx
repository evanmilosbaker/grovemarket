import React from 'react';
import styles from './Header.module.css';

const Header = ({ coverPhoto, about }) => {
  return (
    <div className={styles.headerContainer}>
      <h1>The Grove Market + Smokehouse</h1>
      <h2>Summer 2020</h2>
      <div className={styles.headerText}>{about}</div>
    </div>
  );
};

export default Header;
