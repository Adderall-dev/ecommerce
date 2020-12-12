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
        {checkoutItems.checkoutCart ? (
          checkoutItems.checkoutCart.map((item) => (
            <LiItem key={item.id}>
              {item.name}, ({item.qty})
            </LiItem>
          ))
        ) : (
          <h2>there is nothing to checkout</h2>
        )}
        <h3>Total price: ${checkoutItems.total}</h3>
      </SmCard>
      <Link to="/pay">
        <Btn
          color="white"
          background="green"
          hoverColor="white"
          hoverBg="Darkgreen"
          onClick={() => dispatch(initState())}
        >
          Pay
        </Btn>
      </Link>
    </Wrapper>
  );
};

export default Checkout;
