import React from 'react';
import styles from './Footer.module.css';

const Footer = ({phoneNumber}) => {
  return (
    <div>
      <a href={`${phoneNumber}`} className={styles.phoneLink}>Call 410-352-5055 For Takeout</a>
    </div>
  );
};

export default Footer;
