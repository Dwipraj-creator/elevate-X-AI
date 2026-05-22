import React, { memo } from "react";

const ProductItem = memo(({ product, handleCart }) => {
  console.log("Rendered:", product.name);

  return (
    <li>
      {product.name} - ₹{product.price}

      <button onClick={() => handleCart(product.id)}>
        Add To Cart
      </button>
    </li>
  );
});

export default ProductItem;