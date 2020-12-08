import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, deleteCartItem } from "../redux/ducks/cart";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>cart:</h1>
      {cartItems.length === 0 ? (
        <h2>Cart is empty</h2>
      ) : (
        <ul>
          {cartItems.map((cartItem) => (
            <li key={cartItem.id}>
              {cartItem.name} - {cartItem.qty}
              <button onClick={() => dispatch(deleteCartItem(cartItem.id))}>
                X
              </button>
            </li>
          ))}
        </ul>
      )}

      <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
    </div>
  );
};

export default Cart;
