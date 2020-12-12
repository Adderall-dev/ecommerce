import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>
        This is a simple shop app, want to try it out? Let's{" "}
        <Link to="/shop">shop</Link>:D{" "}
      </p>
    </div>
  );
};

export default Home;
