import './menu.scss';

import React from 'react';
import { MenuCard } from './MenuCard';
import { PRODUCTS } from '../../../products';

export const MenuPage = () => {
  return (
    <div id="menu">
      <div>
        {PRODUCTS.map((menuItem) => (
          <MenuCard
            key={menuItem.itemNum}
            itemNum={menuItem.itemNum}
            burgerSrc={menuItem.burgerSrc}
            price={menuItem.price}
            title={menuItem.title}
            delay={0.1}
          />
        ))}
      </div>
    </div>
  );
};
