import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  checkout,
  deleteCartItem,
  initState,
} from "../redux/ducks/cartReducer";
import { Btn, LiItem, SmCard } from "../style";

const CartItem = ({ cartItems, totalPrice }) => {
  const dispatch = useDispatch();
  return (
    <>
      <SmCard>
        {cartItems.map((cartItem) => (
          <LiItem key={cartItem.id}>
            {cartItem.name}, ({cartItem.qty}), price: ${cartItem.price}
            <Btn onClick={() => dispatch(deleteCartItem(cartItem.id))}>X</Btn>
          </LiItem>
        ))}
        <h2>Total: ${totalPrice}</h2>
      </SmCard>
      <Btn
        color="white"
        background="red"
        hoverColor="white"
        hoverBg="darkred"
        onClick={() => dispatch(initState())}
      >
        Clear Cart
      </Btn>
      <Btn
        color="white"
        background="green"
        hoverColor="white"
        hoverBg="Darkgreen"
        onClick={() => dispatch(checkout(totalPrice, cartItems))}
      >
        <Link to="/checkout">Checkout</Link>
      </Btn>
    </>
  );
};

export default CartItem;
