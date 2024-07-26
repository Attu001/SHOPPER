import React, { createContext, useState } from "react";
import all_product from '../Componentes/Assests/all_product';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = ({ children }) => {
  const [cartitem, setCartitem] = useState(getDefaultCart());
  const [users, setUsers] = useState([]);

  const addToCart = (itemId) => {
    setCartitem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartitem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartitem) {
      if (cartitem[item] > 0) {
        let iteminfo = all_product.find((product) => product.id === Number(item));
        totalAmount += iteminfo.new_price * cartitem[item];
      }
    }
    return totalAmount;
  };

  const getTotalCartItem = () => {
    let totalitem = 0;
    for (const item in cartitem) {
      if (cartitem[item] > 0) {
        totalitem += cartitem[item];
      }
    }
    return totalitem;
  };

  const addUser = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  const contextValue = { 
    all_product, 
    users,
    cartitem, 
    addToCart, 
    removeFromCart, 
    getTotalCartAmount, 
    getTotalCartItem,
    addUser 
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
