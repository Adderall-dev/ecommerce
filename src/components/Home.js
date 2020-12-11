import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>
        this is simple shop app, want to try it? Let's go to{" "}
        <Link to="/shop">shop</Link>:D{" "}
      </p>
    </div>
  );
};

export default Home;
