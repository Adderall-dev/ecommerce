import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCart, deleteCartItem } from "../redux/ducks/cartReducer";
import { Btn, LiItem, SmCard } from "../style";

const CartItem = ({ cartItems, totalPrice }) => {
  const dispatch = useDispatch();
  return (
    <>
      <SmCard>
        {cartItems.map((cartItem) => (
          <LiItem key={cartItem.id}>
            {cartItem.name} : <Btn>+</Btn>( {cartItem.qty} )<Btn>-</Btn> ${" "}
            {cartItem.price}
            <Btn onClick={() => dispatch(deleteCartItem(cartItem.id))}>X</Btn>
          </LiItem>
        ))}
        <h2>Total: $ {totalPrice}</h2>
      </SmCard>
      <Btn onClick={() => dispatch(clearCart())}>Clear Cart</Btn>
      <Btn
        color="white"
        background="green"
        hoverColor="white"
        hoverBg="Darkgreen"
      >
        <Link to="/checkout">Checkout</Link>
      </Btn>
    </>
  );
};

export default CartItem;
