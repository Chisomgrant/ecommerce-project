import React from "react";
import Products from "./Products";

const ProductGrid = ({ products, loadCart }) => {
  return (
    <>
      <div className="products-grid">
        {products.map((product) => {
          return (
            <Products key={product.id} product={product} loadCart={loadCart} />
          );
        })}
      </div>
    </>
  );
};

export default ProductGrid;
