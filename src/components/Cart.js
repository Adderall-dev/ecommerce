import React from "react";
import { useSelector } from "react-redux";
import { SmCard } from "../style";
import { Wrapper } from "../style";

import CartItem from "./CartItem";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartReducer.cart);
  const totalPrice = cartItems
    .map((item) => item.price)
    .reduce((a, b) => a + b, 0);

  return (
    <Wrapper>
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <SmCard>Cart is empty</SmCard>
      ) : (
        <CartItem cartItems={cartItems} totalPrice={totalPrice} />
      )}
    </Wrapper>
  );
};

export default Cart;
