import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext([]);
export const CartContextProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [productsAdded, setProductsAdded] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const amount = productsAdded
      .map((product) => parseInt(product.item.price) * product.quantityAdded)
      .reduce((partialSum, a) => partialSum + a, 0);
    setTotalAmount(amount);
  }, [productsAdded]);

  function addItem(item, cantidad) {
    if (isInCart(item.id)) {
      const modificado = carrito.map((producto) => {
        if (producto.id === item.id) {
          producto.cantidad += cantidad;
        }
        return producto;
      });
      setCarrito(modificado);
    } else {
      setCarrito(carrito.push(item));
    }
  }

  function removeItem(itemId) {
    setCarrito(carrito.filter((item) => item.id !== itemId));
  }

  function clear() {
    setCarrito([]);
  }

  const isInCart = (id) => carrito.some((item) => item.id === id);

  return (
    <CartContext.Provider value={{ addItem, removeItem, clear, isInCart }}>
      {children}
    </CartContext.Provider>
  );
};
