import React from "react";
import { Link } from "react-router-dom";
import { HomeWrapper, Btn } from "../style";

const Home = () => {
  return (
    <HomeWrapper>
      <h1>Time to order food</h1>
      <p>
        This is a simple shop app, want to try it out?
        <Link to="/shop">
          <Btn>Let's shop</Btn>
        </Link>
      </p>
    </HomeWrapper>
  );
};

export default Home;
