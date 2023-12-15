import './cart.scss';

import React from 'react';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import burger1 from './../../../public/assets/burger1.png';
import burger2 from './../../../public/assets/burger2.png';
import burger3 from './../../../public/assets/burger3.png';

const CartItem = ({ title, img, increment, decrement, quantity, price }) => (
  <div className="cartItem">
    <div className="burger_info">
      <div className="burger_img">
        <img src={img} alt="Item" />
      </div>
      <div>
        <h4>{title}</h4>
        <h4> ₹{price}</h4>
      </div>
    </div>

    <div>
      <button onClick={decrement}>-</button>
      <input type="number" readOnly value={quantity} />
      <button onClick={increment}>+</button>
    </div>
  </div>
);

export const CartPage = () => {
  const [cheeseBugergerCount, setCheeseBugergerCount] = useState(0);
  const [vegBurgerCount, setVegBurgerCount] = useState(0);
  const [cheeseburgerWithFries, setCheeseburgerWithFries] = useState(0);

  const increment = (setter) => () => setter((prevValue) => prevValue + 1);

  const decrement = (setter) => () =>
    setter((prevValue) => Math.max(prevValue - 1, 0));

  const subTotal =
    cheeseBugergerCount * 200 +
    vegBurgerCount * 500 +
    cheeseburgerWithFries * 1800;
  const tax = subTotal * 0.18;
  const shippingCharges = 200;
  const total = subTotal + tax + shippingCharges;

  return (
    <section className="cart">
      <main>
        <CartItem
          title={'Cheese Burger'}
          img={burger1}
          quantity={cheeseBugergerCount}
          increment={increment(setCheeseBugergerCount)}
          decrement={decrement(setCheeseBugergerCount)}
          price={200}
        />

        <CartItem
          title={'Veg Cheese Burger'}
          img={burger2}
          quantity={vegBurgerCount}
          increment={increment(setVegBurgerCount)}
          decrement={decrement(setVegBurgerCount)}
          price={500}
        />

        <CartItem
          title={'Cheeseburger with French Fries'}
          img={burger3}
          quantity={cheeseburgerWithFries}
          increment={increment(setCheeseburgerWithFries)}
          decrement={decrement(setCheeseburgerWithFries)}
          price={1800}
        />

        <article>
          <div>
            <h4>Sub Total</h4>
            <p>₹{subTotal}</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>₹{tax}</p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>₹{shippingCharges}</p>
          </div>{' '}
          <div>
            <h4>Total</h4>
            <p>₹{total}</p>
          </div>
          <Link to="/shipping">Checkout</Link>
        </article>
      </main>
    </section>
  );
};
