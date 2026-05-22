import React, {
  useState,
  useMemo,
  useCallback,
} from "react";

import { products } from "../DemoData/productData";
import ProductItem from "./ProductItem";

const Product = () => {
  const [input, setInput] = useState("");
  const [cart, setCart] = useState([]);
  const [counter, setCounter] = useState(0);

  // FILTER PRODUCTS
  const filteredProducts = useMemo(() => {
    console.log("Filtering Products");

    return products.filter((product) =>
      product.name
        .toLowerCase()
        .includes(input.toLowerCase())
    );
  }, [input]);

  // ADD TO CART
  const handleCart = useCallback((id) => {
    const selectedProduct = products.find(
      (product) => product.id === id
    );

    if (!selectedProduct) return;

    setCart((prev) => [...prev, selectedProduct]);
  }, []);

  // CART TOTAL
  const cartTotal = useMemo(() => {
    console.log("Calculating Total");

    return cart.reduce((acc, curr) => {
      return acc + curr.price;
    }, 0);
  }, [cart]);

  return (
    <div>
      <input
        type="text"
        value={input}
        placeholder="Search Product"
        onChange={(e) =>
          setInput(e.target.value)
        }
      />

      <h2>Cart Count: {cart.length}</h2>

      <h2>Cart Total: ₹{cartTotal}</h2>

      <button
        onClick={() =>
          setCounter((prev) => prev + 1)
        }
      >
        Counter: {counter}
      </button>

      <ul>
        {filteredProducts.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            handleCart={handleCart}
          />
        ))}
      </ul>
    </div>
  );
};

export default Product;