import './cart.scss';

import React from 'react';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import burger1 from './../../../public/assets/burger1.png';
import burger2 from './../../../public/assets/burger2.png';
import burger3 from './../../../public/assets/burger3.png';

// const CartItem = ({ value, title, img, increment, decrement, price }) => (
//   <div className="cartItem">
//     <div>
//       <img src={img} alt="Item" />
//       <h4>{title}</h4>
//       <h4> ₹{price}</h4>
//       <button onClick={decrement}>-</button>
//       <input type="number" readOnly value={value} />
//       <button onClick={increment}>+</button>
//     </div>
//   </div>
// );

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

  const increment = (item) => {
    if (item === 1) {
      setValueBurger1(valueBurger1 + 1);
    } else if (item === 2) {
      setValueBurger2(valueBurger2 + 2);
    } else if (item === 3) {
      setValueBurger3(valueBurger3 + 3);
    }
  };

  const decrement = (item) => {
    if (item === 1 && valueBurger1 - 1 >= 0) {
      setValueBurger1(valueBurger1 - 1);
    } else if (item === 2 && valueBurger2 - 2 >= 0) {
      setValueBurger2(valueBurger2 - 2);
    } else if (item === 3) {
      valueBurger3 - 3 >= 0 && setValueBurger3(valueBurger3 - 3);
    }
  };

  return (
    <section className="cart">
      <main>
        <CartItem
          title={'Cheese Burger'}
          img={burger1}
          value={valueBurger1}
          increment={() => increment(1)}
          decrement={() => decrement(1)}
          price={200}

          // Add the function for decrementing the order by 1
        />
        <CartItem
          title={'Veg Cheese Burger'}
          img={burger2}
          value={valueBurger2}
          increment={() => increment(2)}
          decrement={() => decrement(2)}
          price={500}
          // Add the function for decrementing the order by 2
        />

        <CartItem
          title={'Cheeseburger with French Fries'}
          img={burger3}
          value={valueBurger3}
          increment={() => increment(3)}
          decrement={() => decrement(3)}
          price={1800}
        />
        <article>
          <div>
            <h4>Sub Total</h4>
            <p>₹{2000}</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>₹{2000 * 0.18}</p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>₹{200}</p>
          </div>{' '}
          <div>
            <h4>Total</h4>
            <p>₹{2000 + 2000 * 0.18 + 200}</p>
          </div>
          <Link to="/shipping">Checkout</Link>
        </article>
      </main>
    </section>
  );
};
