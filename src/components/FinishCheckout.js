import React from "react";
import { Link } from "react-router-dom";
import { Wrapper, Btn } from "../style";
import { FaHome } from "react-icons/fa";

const FinishCheckout = () => {
  return (
    <Wrapper>
      <h1>You're welcome to pick up your order in a few minutes!</h1>
      <h3>
        forgot something? You can create new order -{" "}
        <Btn>
          <Link to="/shop">Shop</Link>
        </Btn>
      </h3>
      <h3>
        Go back to{" "}
        <Btn>
          <Link to="/">
            <FaHome /> Home
          </Link>
        </Btn>
      </h3>
    </Wrapper>
  );
};

export default FinishCheckout;
