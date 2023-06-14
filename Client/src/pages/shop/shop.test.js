/*
Code Analysis

Objective:
The objective of the Product function is to render a product component with its details and an "Add to Cart" button. It also uses the ShopContext to update the cart items and display the number of items in the cart.

Inputs:
- props: an object containing the data of the product, including id, productName, price, alt, and productImage.

Flow:
1. Destructure the props object to get the product data.
2. Use the useContext hook to get the addToCart function and cartItems from the ShopContext.
3. Get the cart item count for the current product.
4. Render the product component with the product details and an "Add to Cart" button.
5. When the "Add to Cart" button is clicked, call the addToCart function with the product id.

Outputs:
- A product component with its details and an "Add to Cart" button.
- The number of items in the cart for the current product.

Additional aspects:
- The product component is wrapped in a Link component from react-router-dom to navigate to the product details page.
- The ShopContext is imported from "../../context/shop-context".
- The ShopContext is also exported as createContext(null), which creates a new context object.
*/
import React from "react";
import {fireEvent, getByAltText, render, screen} from "@testing-library/react";
import '@testing-library/jest-dom';
import {Product} from "./product";
import {ShopContext} from "../../context/shop-context";
import {MemoryRouter} from "react-router-dom";


describe('Product_function', () => {

    // Tests that the product is rendered with the correct data
    it("test_rendering_product", () => {
        const data = {
            id: 1,
            productName: "Test Product",
            price: 10.99,
            alt: "Test Image",
            productImage: "test-image.jpg"
        };
        const { getByText, getByAltText } = render(
            <ShopContext.Provider value={{ addToCart: jest.fn(), cartItems: {} }}>
                <MemoryRouter>
                    <Product data={data} />
                </MemoryRouter>
            </ShopContext.Provider>
        );
        expect(getByText("Test Product")).toBeInTheDocument();
        expect(getByText("$10.99")).toBeInTheDocument();
        expect(getByAltText("Test Image")).toBeInTheDocument();
    });

    // Tests that the product is added to the cart with the correct count
    it("test_adding_product_to_cart", () => {
        const data = {
            id: 1,
            productName: "Test Product",
            price: 10.99,
            alt: "Test Image",
            productImage: "test-image.jpg"
        };
        const addToCartMock = jest.fn();
        const { getByText } = render(
            <ShopContext.Provider value={{ addToCart: addToCartMock, cartItems: {} }}>
                <MemoryRouter>
                    <Product data={data} />
                </MemoryRouter>
            </ShopContext.Provider>
        );
        fireEvent.click(getByText("Add To Cart"));
        expect(addToCartMock).toHaveBeenCalledWith(1);
    });

    // Tests that the component handles an empty cartItems object
    it("test_empty_cart_items_object", () => {
        const data = {
            id: 1,
            productName: "Test Product",
            price: 10.99,
            alt: "Test Image",
            productImage: "test-image.jpg"
        };
        const { getByText } = render(
            <ShopContext.Provider value={{ addToCart: jest.fn(), cartItems: {} }}>
                <MemoryRouter>
                    <Product data={data} />
                </MemoryRouter>
            </ShopContext.Provider>
        );
        expect(getByText("Add To Cart")).toBeInTheDocument();
    });

    // Tests that the component displays the correct cart item count
    it("test_correct_cart_item_count_display", () => {
        const data = {
            id: 1,
            productName: "Test Product",
            price: 10.99,
            alt: "Test Image",
            productImage: "test-image.jpg"
        };
        const addToCartMock = jest.fn();
        const { getByText } = render(
            <ShopContext.Provider value={{ addToCart: addToCartMock, cartItems: { 1: 3 } }}>
                <MemoryRouter>
                    <Product data={data} />
                </MemoryRouter>
            </ShopContext.Provider>
        );
        expect(getByText(/(3)/)).toBeInTheDocument();
    });
});