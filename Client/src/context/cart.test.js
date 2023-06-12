import Cart from "./cart";

/*
Code Analysis

Main functionalities:
The Cart class is responsible for managing the items in a shopping cart. It provides methods for adding, removing, and updating the quantity of items in the cart, as well as calculating the total amount of the cart and checking out.

Methods:
- getDefaultCart(): returns an object representing an empty cart with all item quantities set to 0
- getTotalCartAmount(): calculates and returns the total amount of the cart based on the current item quantities and their prices
- addToCart(itemId): increments the quantity of the item with the given ID in the cart
- removeFromCart(itemId): decrements the quantity of the item with the given ID in the cart
- updateCartItemCount(newAmount, itemId): sets the quantity of the item with the given ID in the cart to the given value
- checkout(): clears the cart by setting all item quantities to 0
- getContextValue(): returns an object containing the current cart items, as well as all the above methods for manipulating the cart

Fields:
- cartItems: an object representing the current state of the cart, with item IDs as keys and their respective quantities as values
- setCartItems: a function for updating the cartItems field, passed in as a parameter to the constructor
*/

export const log = logMsg => console.log(logMsg);

describe('Cart_class', () => {

    // Testea que un artículo se ha añadido al carrito de compra
    it("test_add_to_cart", () => {
        const cartItems = { 1: 0, 2: 0 };
        const setCartItems = jest.fn();
        const cart = new Cart(cartItems, setCartItems);
        cart.addToCart(1);
        const save = setCartItems.mock.calls[0][0];
        expect(save(cartItems)).toEqual({ 1: 1, 2: 0 });
    });

    it("test_add_to_cart2", () => {
        const cartItems = { 1: 0, 2: 0 };
        const setCartItems = jest.fn((prev) => ({...prev, [itemId]: prev[itemId] + 1}));

        const cart = new Cart(cartItems, setCartItems);

        const itemId = 1;
        cart.addToCart(itemId);

        const expectedCartItems = { ...cartItems, [itemId]: cartItems[itemId] + 1 };
        const actualCartItems = cart.cartItems;
        expect(actualCartItems).toEqual(expectedCartItems);
    })

    //  Testea que un artículo se ha eliminado del carrito de compra
    it("test_remove_from_cart", () => {
        const cartItems = { 1: 2, 2: 0 };
        const setCartItems = jest.fn();
        const cart = new Cart(cartItems, setCartItems);
        cart.removeFromCart(1);
        expect(setCartItems).toHaveBeenCalledWith({ 1: 1, 2: 0 });
    });

    //  Testea que un artículo se ha actualizado en el carrito de compra
    it("test_update_cart_item_count", () => {
        const cartItems = { 1: 2, 2: 0 };
        const setCartItems = jest.fn();
        const cart = new Cart(cartItems, setCartItems);
        cart.updateCartItemCount(3, 1);
        expect(setCartItems).toHaveBeenCalledWith({ 1: 3, 2: 0 });
    });

    // Tests that an error is thrown when adding a nonexistent item to the cart
    it("test_add_nonexistent_item_to_cart", () => {
        const cartItems = { 1: 2, 2: 0 };
        const setCartItems = jest.fn();
        const cart = new Cart(cartItems, setCartItems);
        expect(() => cart.addToCart(3)).toThrowError("Item does not exist in products list");
    });

    // Tests that an error is thrown when removing an item with a count of zero
    it("test_remove_item_when_count_is_zero", () => {
        const cartItems = { 1: 0, 2: 0 };
        const setCartItems = jest.fn();
        const cart = new Cart(cartItems, setCartItems);
        expect(() => cart.removeFromCart(1)).toThrowError("Item count is already zero");
    });

    // Tests that an error is thrown when updating the item count to a negative value
    it("test_update_cart_item_count_negative_value", () => {
        const cartItems = { 1: 2, 2: 0 };
        const setCartItems = jest.fn();
        const cart = new Cart(cartItems, setCartItems);
        expect(() => cart.updateCartItemCount(-1, 1)).toThrowError("Item count cannot be negative");
    });
});