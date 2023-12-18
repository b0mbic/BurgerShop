import './cart.scss';

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../../products';
import { ShopContext } from '../../context/shop-context';

const CartItem = ({ id, title, img, price }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);

  return (
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
        <button onClick={() => removeFromCart(id)}>-</button>
        <input type="number" readOnly value={cartItems[id]} />
        <button onClick={() => addToCart(id)}>+</button>
      </div>
    </div>
  );
};

export const CartPage = () => {
  const { cartItems, getSubtotal, getTax, getShippingCharges, getTotal } =
    useContext(ShopContext);

  const subtotal = getSubtotal();
  const tax = getTax();
  const shippingCharges = getShippingCharges();
  const total = getTotal();

  console.log(cartItems);
  console.log(PRODUCTS);
  console.log(subtotal);

  return (
    <section className="cart">
      <main>
        {PRODUCTS.map((product) => {
          if (cartItems[product.itemNum] !== 0) {
            return (
              <CartItem
                key={product.itemNum}
                id={product.itemNum}
                title={product.title}
                img={product.burgerSrc}
                quantity={cartItems[product.itemNum]}
                price={product.price}
              />
            );
          }
        })}

        <article>
          <div>
            <h4>Sub Total</h4>
            <p>₹{subtotal}</p>
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
