import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div>
      <a href="tel:4103523325" className={styles.phoneLink}>Call 410-352-5055 For Delivery</a>
      <span>Made With Love By Evan B.</span>
    </div>
  );
};

export default Footer;
