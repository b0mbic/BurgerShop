import { createContext, useState } from 'react';
import { PRODUCTS } from '../products';
import { useEffect } from 'react';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 1; index < PRODUCTS.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const getSubtotal = () => {
    let subtotal = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find(
          (product) => product.itemNum === Number(item),
        );
        subtotal += cartItems[item] * itemInfo.price;
      }
    }

    return subtotal;
  };

  const getTax = () => {
    return getSubtotal() * 0.18;
  };

  const getShippingCharges = () => {
    return 200;
  };

  const getTotal = () => {
    const subTotal = getSubtotal();
    const tax = getTax();
    const shippingCharges = getShippingCharges();
    return subTotal + tax + shippingCharges;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    getSubtotal,
    getTax,
    getShippingCharges,
    getTotal,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
