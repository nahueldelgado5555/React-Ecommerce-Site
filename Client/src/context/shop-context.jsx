import { createContext, useState } from "react";
import Cart from "./cart";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(Cart.getDefaultCart());

  const cart = new Cart(cartItems, setCartItems);

  return (
    <ShopContext.Provider value={cart.getContextValue()}>
      {props.children}
    </ShopContext.Provider>
  );
};