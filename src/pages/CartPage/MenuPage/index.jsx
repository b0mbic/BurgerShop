import './menu.scss';

import React from 'react';
import { MenuCard } from './MenuCard';
import burger1 from '../../../../public/assets/burger1.png';
import burger2 from '../../../../public/assets/burger2.png';
import burger3 from '../../../../public/assets/burger3.png';

export const MenuPage = ({ addToCartHandler }) => {
  const menuItems = [
    { itemNum: 1, burgerSrc: burger1, price: 200, title: 'CHEESE BURGER' },
    { itemNum: 2, burgerSrc: burger2, price: 500, title: 'VEG CHEESE BURGER' },
    {
      itemNum: 3,
      burgerSrc: burger3,
      price: 1800,
      title: 'CHEESE BURGER WITH FRENCH FRIES',
    },
  ];

  return (
    <div id="menu">
      <div>
        {menuItems.map((menuItem) => (
          <MenuCard
            key={menuItem.itemNum}
            itemNum={menuItem.itemNum}
            burgerSrc={menuItem.burgerSrc}
            price={menuItem.price}
            title={menuItem.title}
            // handler={() => addToCartHandler(menuItem)}
            delay={0.1}
          />
        ))}
      </div>
    </div>
  );
};
