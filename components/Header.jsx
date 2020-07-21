import React from 'react';
import styles from './Header.module.css';

const Header = ({ header, subHeader, about }) => {
  return (
    <div className={styles.headerContainer}>
      <h1>{header}</h1>
      <h2>{subHeader}</h2>
      <div className={styles.headerText}>{about}</div>
    </div>
  );
};

export default Header;
