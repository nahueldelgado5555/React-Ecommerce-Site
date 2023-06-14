import React from "react";
import { getProducts } from "../../products";
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Peter's Tech Shop</h1>
      </div>

      <div className="products">
        {getProducts().map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};