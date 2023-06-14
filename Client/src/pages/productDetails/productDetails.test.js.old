/*
Code Analysis

Objective:
The ProductDetails function is used to display the details of a specific product, including its name, image, price, and description. It also allows the user to add the product to their cart.

Inputs:
- useParams(): a hook from the react-router-dom library that extracts the ID parameter from the URL
- useContext(): a hook from the React library that allows the function to access the ShopContext, which contains the addToCart function and cartItems array

Flow:
1. Extract the ID parameter from the URL using the useParams hook
2. Use the ID to find the product in the PRODUCTS array
3. If the product doesn't exist, return an error message
4. If the product exists, render its details, including the product name, image, price, and description
5. Allow the user to add the product to their cart using the addToCart function from the ShopContext

Outputs:
- A div containing the product details, including the product name, image, price, and description
- A button that allows the user to add the product to their cart, with the number of items in the cart displayed next to the button if the user has already added the product to their cart
- If the product doesn't exist, a div containing the message "Product not found"

Additional aspects:
- The function uses the createContext function to create a new context object, ShopContext, which is then imported from the shop-context file
- The function uses the PRODUCTS array to find the product with the given ID
- The function uses CSS classes to style the product details and add to cart button
*/

import React, {useContext} from "react";
import {fireEvent, getByAltText, render, screen} from "@testing-library/react";
import '@testing-library/jest-dom';
import {ShopContext, addToCart, cartItems} from "../../context/shop-context";
import {ProductDetails} from "./productDetails";
import {MemoryRouter, Route, Router, Routes} from "react-router-dom";
import product1 from "../../assets/products/1.png";


describe('ProductDetails Component', () => {
    test('should render the product details correctly', () => {
        const addToCart = jest.fn();
        const cartItems = { 1: 2 }; // Example cart items for testing
        const product = {
            id: "1",
            productName: "Apple IPhone 14",
            alt: "Apple IPhone 14",
            price: 999.0,
            productImage: product1,
        };

        render(
            <MemoryRouter initialEntries={['/products/1']}>
                <ShopContext.Provider value={{ addToCart, cartItems }}>
                    <Routes>
                        <Route path="/products/:id" element={<ProductDetails />} />
                    </Routes>
                </ShopContext.Provider>
            </MemoryRouter>
        );

        // Verify that the product details are rendered correctly
        expect(screen.getByText(product.productName)).toBeInTheDocument();
        //expect(screen.getByText(`ID: ${product.id}`)).toBeInTheDocument();
        expect(screen.getByText(`$${product.price}`)).toBeInTheDocument();

        // Verify that the "Add to Cart" button is rendered correctly
        const addToCartButton = screen.getByRole('button', { name: /add to cart/i });
        expect(addToCartButton).toBeInTheDocument();
        fireEvent.click(addToCartButton);
        expect(addToCart).toHaveBeenCalledWith(product.id);
    });

    test('should display an error message when the product is not found', () => {
        render(
            <MemoryRouter initialEntries={['/products/999']}>
                <ShopContext.Provider value={{ addToCart: jest.fn(), cartItems: {} }}>
                    <Routes>
                        <Route path="/products/:id" element={<ProductDetails />} />
                    </Routes>
                </ShopContext.Provider>
            </MemoryRouter>
        );

        // Verify that the error message is displayed correctly
        expect(screen.getByText(/product not found/i)).toBeInTheDocument();
    });
});