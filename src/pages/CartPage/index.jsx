import './cart.scss';

import React from 'react';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import burger1 from './../../../public/assets/burger1.png';
import burger2 from './../../../public/assets/burger2.png';
import burger3 from './../../../public/assets/burger3.png';

const CartItem = ({ value, title, img, increment, decrement, price }) => (
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
      <input type="number" readOnly value={value} />
      <button onClick={increment}>+</button>
    </div>
  </div>
);

export const CartPage = () => {
  const [valueBurger1, setValueBurger1] = useState(0);
  const [valueBurger2, setValueBurger2] = useState(0);
  const [valueBurger3, setValueBurger3] = useState(0);

  const increment = (setter) => () => setter((prevValue) => prevValue + 1);

  const decrement = (setter) => () =>
    setter((prevValue) => Math.max(prevValue - 1, 0));

  const subTotal =
    valueBurger1 * 200 + valueBurger2 * 500 + valueBurger3 * 1800;
  const tax = subTotal * 0.18;
  const shippingCharges = 200;
  const total = subTotal + tax + shippingCharges;

  // const increment = (item) => {
  //   if (item === 1) {
  //     setValueBurger1(valueBurger1 + 1);
  //   } else if (item === 2) {
  //     setValueBurger2(valueBurger2 + 2);
  //   } else if (item === 3) {
  //     setValueBurger3(valueBurger3 + 3);
  //   }
  // };

  // const decrement = (item) => {
  //   if (item === 1 && valueBurger1 - 1 >= 0) {
  //     setValueBurger1(valueBurger1 - 1);
  //   } else if (item === 2 && valueBurger2 - 2 >= 0) {
  //     setValueBurger2(valueBurger2 - 2);
  //   } else if (item === 3) {
  //     valueBurger3 - 3 >= 0 && setValueBurger3(valueBurger3 - 3);
  //   }
  // };

  return (
    <section className="cart">
      <main>
        <CartItem
          title={'Cheese Burger'}
          img={burger1}
          value={valueBurger1}
          increment={increment(setValueBurger1)}
          decrement={decrement(setValueBurger1)}
          price={200}
        />

        <CartItem
          title={'Veg Cheese Burger'}
          img={burger2}
          value={valueBurger2}
          increment={increment(setValueBurger2)}
          decrement={decrement(setValueBurger2)}
          price={500}
        />

        <CartItem
          title={'Cheeseburger with French Fries'}
          img={burger3}
          value={valueBurger3}
          increment={increment(setValueBurger3)}
          decrement={decrement(setValueBurger3)}
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
