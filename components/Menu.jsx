import React from 'react';

const Menu = ({ menu }) => {
  console.log('menu', menu);
  return (
    <div>
      <h3>Dinner Menu</h3>
      <span>* all items subject to availability</span>
      {Object.keys(menu).map((menuType) => {
        return (
          <div key={menuType}>
            <h4>{menuType}</h4>
            <ul>
              {menu[menuType].map((item) => {
                return <li key={item}>{item}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
