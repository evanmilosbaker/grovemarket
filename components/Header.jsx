import React from 'react';
import styles from './Header.module.css';

const Header = ({ header, subHeader, about, coverPhoto }) => {
  console.log('cover photo', coverPhoto)
  return (
    <div className={styles.headerContainer} style={{'backgroundImage': `url(${coverPhoto.fields.file.url})`}}>
      <h1 className={styles.header}>{header}</h1>
      <h2 className={styles.subHeader}>{subHeader}</h2>
      <div className={styles.about}>{about}</div>
    </div>
  );
};

export default Header;
