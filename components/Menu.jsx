import React from 'react';
import styles from './Menu.module.css';

const Menu = ({ menu }) => {

  return (
    <div className={styles.menuContainer}>
      <h3>Dinner Menu</h3>
      {Object.keys(menu).map((menuType) => {
        const individualMenu = menu[menuType];
        if (Array.isArray(individualMenu)) {
          return (
            <div key={menuType}>
              <h4>{menuType}</h4>
              <ul className={styles.menuList}>
                {menu[menuType].map((item) => {
                  return (
                    <li key={item.itemName} className={styles.menuItem}>
                      <div className={styles.namePriceContainer}>
                        <span className={styles.itemName}>{item.itemName}</span>
                        <span className={styles.price}>{item.price}</span>
                      </div>
                      <span className={styles.description}>{item.description}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        } else {
          return <h4>{individualMenu}</h4>
        }
      })}
    </div>
  );
};

export default Menu;
