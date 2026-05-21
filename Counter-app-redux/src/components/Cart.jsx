import React from "react";

import { useSelector, useDispatch } from "react-redux";

import {
  addToCart,
  removeFromCart,
  resetCart,
} from "../redux/actions";

const Cart = () => {

  const cartCount = useSelector(
    (state) => state.cartCount
  );

  const dispatch = useDispatch();

  return (
    <div>

      <h1>Cart Items: {cartCount}</h1>

      <button onClick={() => dispatch(addToCart())}>
        Add to Cart
      </button>

      <button onClick={() => dispatch(removeFromCart())}>
        Remove from Cart
      </button>

      <button onClick={() => dispatch(resetCart())}>
        Reset Cart
      </button>

    </div>
  );
};

export default Cart;