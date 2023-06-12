import { createContext, useState } from "react";
import Cart from "./cart";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(Cart.getDefaultCart());

  const context = {
    cartItems,
    addToCart: (itemId) => setCartItems(Cart.addToCart.bind(null, itemId)),
    updateCartItemCount: (newAmount, itemId) => setCartItems(Cart.updateCartItemCount.bind(null, newAmount, itemId)),
    removeFromCart: (itemId) => setCartItems(Cart.removeFromCart().bind(null, itemId)),
    getTotalCartAmount: () => Cart.getTotalCartAmount(cartItems),
    checkout: () => setCartItems(Cart.getDefaultCart),
  };

  return (
    <ShopContext.Provider value={context}>
      {props.children}
    </ShopContext.Provider>
  );
};