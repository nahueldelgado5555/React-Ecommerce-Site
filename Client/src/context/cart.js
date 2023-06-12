import { PRODUCTS } from "../products";

export default class Cart {
  static getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
      cart[i] = 0;
    }
    return cart;
  };

  static getTotalCartAmount = (currentCart) => {
    let totalAmount = 0;
    for (const item in currentCart) {
      if (currentCart[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += currentCart[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  static addToCart = (itemId, currentCart) => ({ ...currentCart, [itemId]: currentCart[itemId] + 1 });

  static removeFromCart = (itemId, currentCart) => ({ ...currentCart, [itemId]: currentCart[itemId] - 1 });

  static updateCartItemCount = (newAmount, itemId, currentCart) => ({ ...currentCart, [itemId]: newAmount });
}
