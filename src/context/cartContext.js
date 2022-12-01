import React, { createContext, useState } from 'react';

export const Context = createContext();

export const CartContextProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  function addItem(item) {
    setCarrito(carrito.push(item));
  }

  function removeItem(itemId) {
    setCarrito(carrito.filter((item) => item.id !== itemId));
  }

  function clear() {
    setCarrito([]);
  }

  function isInCart(itemId) {
    return Boolean(carrito.find((item) => item.id === itemId));
  }

  return (
    <Context.Provider value={{ addItem, removeItem, clear, isInCart }}>
      {children}
    </Context.Provider>
  );
};
