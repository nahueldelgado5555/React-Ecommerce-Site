import { PRODUCTS } from "../products";

export default class Cart {
  constructor(cartItems, setCartItems) {
    this.cartItems = cartItems;
    this.setCartItems = setCartItems;
  }

  static getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
      cart[i] = 0;
    }
    return cart;
  };

  getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in this.cartItems) {
      if (this.cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += this.cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  addToCart = (itemId) => {
    this.setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  removeFromCart = (itemId) => {
    this.setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  updateCartItemCount = (newAmount, itemId) => {
    this.setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  checkout = () => {
    this.setCartItems(this.constructor.getDefaultCart());
  };

  getContextValue = () => ({
    cartItems: this.cartItems,
    addToCart: this.addToCart,
    updateCartItemCount: this.updateCartItemCount,
    removeFromCart: this.removeFromCart,
    getTotalCartAmount: this.getTotalCartAmount,
    checkout: this.checkout,
  });
}
