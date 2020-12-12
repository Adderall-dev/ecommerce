import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { initState } from "../redux/ducks/cartReducer";
import { SmCard, Wrapper, LiItem, Btn } from "../style";

const Checkout = () => {
  const checkoutItems = useSelector((state) => state.cartReducer.checkout);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <h1>Checkout</h1>
      <SmCard>
        <h3>Selected items:</h3>
        {checkoutItems.cart.map((item) => (
          <LiItem key={item.id}>
            {item.name}, ({item.qty})
          </LiItem>
        ))}
      </SmCard>
      <h4>Total price: ${checkoutItems.total}</h4>
      <Btn
        color="white"
        background="green"
        hoverColor="white"
        hoverBg="Darkgreen"
        onClick={() => dispatch(initState())}
      >
        <Link to="/pay">Pay</Link>
      </Btn>
    </Wrapper>
  );
};

export default Checkout;
