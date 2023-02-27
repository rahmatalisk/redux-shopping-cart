import React from "react";
import { useSelector } from "react-redux";
import AddProduct from "./AddProduct";
import ProductItem from "./ProductItem";

const ProductContainer = () => {
  const items = useSelector((state) => state);
  return (
    <div className="productWrapper">
      <div className="productContainer" id="lws-productContainer">
        {items.length === 0 ? (
          <p>No product Found. But you can add.</p>
        ) : (
          items.map((it) => <ProductItem key={it.id} product={it} />)
        )}
      </div>
      <AddProduct />
    </div>
  );
};

export default ProductContainer;
