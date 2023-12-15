import './menu.scss';

import React from 'react';
import { MenuCard } from './MenuCard';
import burger1 from './../../../public/assets/burger1.png';
import burger2 from './../../../public/assets/burger2.png';
import burger3 from './../../../public/assets/burger3.png';

export const MenuPage = () => {
  const addToCartHandler = () => {};

  return (
    <div id="menu">
      <div>
        <MenuCard
          itemNum={1}
          burgerSrc={burger1}
          price={200}
          title="CHESE BURGER"
          handler={addToCartHandler}
          delay={0.1}
        />

        <MenuCard
          itemNum={2}
          burgerSrc={burger2}
          price={500}
          title=" VEG CHEESE BURGER"
          handler={addToCartHandler}
          delay={0.1}
        />

        <MenuCard
          itemNum={3}
          burgerSrc={burger3}
          price={1800}
          title="CHEESE BURGER WITH FRENCH FRIES"
          handler={addToCartHandler}
          delay={0.1}
        />
      </div>
    </div>
  );
};
