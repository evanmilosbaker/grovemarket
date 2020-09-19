import React from 'react';
import styles from './Menu.module.css';
import { parseArrayToObject } from '../lib/utils';
// push changes / deploy
const Menu = ({ menus }) => {
  const { seafood, entrees, appetizers } = parseArrayToObject(menus, 'key');
  const dinnerMenu = [entrees, appetizers]  
  return (
    <div className={styles.menuContainer}>
      <h3 className={styles.menuType}>Dinner Menu</h3>
      {dinnerMenu.map(menu => (
        <div className={styles.menuCategory}>
        <h4 className={styles.menuSection}>{menu.menuType}</h4>
        {menu.header && <span className={styles.menuHeader}>{menu.header}</span>}
        <ul className={styles.menuList}>
          {menu.items.map(item => (
            <li key={item.itemName} className={styles.menuItem}>
            <div className={styles.namePriceContainer}>
              <span className={styles.itemName}>{item.itemName}</span>
              <span className={styles.price}>{item.price}</span>
            </div>
            <span className={styles.description}>{item.description}</span>
          </li>
          ))}
        </ul>
      </div> 
      ))}
      <h3 className={styles.menuType}>Seafood</h3>
      <div className={styles.menuCategory}>
        <ul className={styles.menuList}>
          {seafood.items.map(item => (
            <li key={item.itemName} className={styles.menuItem}>
            <div className={styles.namePriceContainer}>
              <span className={styles.itemName}>{item.itemName}</span>
              <span className={styles.price}>{item.price}</span>
            </div>
            <span className={styles.description}>{item.description}</span>
          </li>
          ))}
        </ul>
      </div> 
    </div>
  );
};

export default Menu;
